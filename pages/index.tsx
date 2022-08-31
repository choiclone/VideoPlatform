import type { NextPage } from 'next'
import axios from 'axios'
import { Video } from '../types'
import VideoCard from '../components/VideoCard'
import NoResults from '../components/NoResults'

import { BASE_URL } from '../utils'

interface Props {
  videos: Video[];
}

const Home = ({ videos }: Props) => {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ?
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        )) : (
          <NoResults text={"동영상 없음."} />
        )}
    </div>
  )
}

export const getServerSideProps = async ({
  query: { topic }
}: {
  query: { topic: string }
}) => {
  let res = null
  if (topic) {
    res = await axios.get(`${BASE_URL}api/discover/${topic}`);
  } else {
    res = await axios.get(`${BASE_URL}api/post`);
  }

  return {
    props: {
      videos: res.data
    }
  }
}

export default Home
