import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NoResults';
import { IUser, Video } from '../../types';
import useAuthStore from '../../store/authStore';

import { BASE_URL } from '../../utils'

interface Props {
    videos: Video[]
}

const Search = ({ videos }: Props) => {
    const [isAccounts, setIAccounts] = useState(false);
    const router = useRouter();
    const { search }: any = router.query;
    const { allUsers } = useAuthStore();

    const accounts = isAccounts ? 'border-b-2 border black' : 'text-gray-400'
    const isVideos = !isAccounts ? 'border-b-2 border black' : 'text-gray-400'
    const searchedAccounts = allUsers.filter((user: IUser) => user.userName.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className='w-full'>
            <div className='flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full'>
                <p className={`text-xl font-semibold cursor-pointer mt-2 ${accounts}`} onClick={() => setIAccounts(true)}>계정</p>
                <p className={`text-xl font-semibold cursor-pointer mt-2 ${isVideos}`} onClick={() => setIAccounts(false)}>동영상</p>
            </div>
            {isAccounts ? (
                <div className='md:mt-12 '>
                    {searchedAccounts.length > 0 ? (
                        searchedAccounts.map((user: IUser, i: number) => (
                            <Link href={`/profile/${user._id}`} key={i}>
                                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded border-b-2 border-gray-200'>
                                    <div>
                                        <Image
                                            src={user.image}
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                            alt="프로파일"
                                        />
                                    </div>
                                    <div className='hidden xl:block'>
                                        <p className='flex gap-1 items-center text-md font-bold text-primary lowercase'>
                                            {user.userName.replaceAll(' ', '')}
                                            <GoVerified className='text-blue-400 ' />
                                        </p>
                                        <p className='capitalize text-gray-400 text-xs'>
                                            {user.userName}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <NoResults text={`${search}에 대한 결과가 존재하지 않습니다.`} />
                    )}
                </div>
            ) : (
                <div className='md:mt-16 flex flex-wrap gap-6 md:justify-start'>
                    {videos.length ? (
                        videos.map((video: Video, i: number) => (
                            <VideoCard post={video} key={i} />
                        ))
                    ) : (
                        <NoResults text={`${search}에 대한 결과가 존재하지 않습니다.`} />
                    )}
                </div>
            )}
        </div>
    )
}

export const getServerSideProps = async ({ params: { search } }: { params: { search: string } }) => {
    const res = await axios.get(`${BASE_URL}api/search/${encodeURI(search)}`)

    return {
        props: {
            videos: res.data
        }
    }
}

export default Search