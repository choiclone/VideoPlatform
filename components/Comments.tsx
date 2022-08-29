import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';

import useAuthStore from '../store/authStore';
import NoResults from './NoResults';

interface Props {
  isPostingComment: Boolean;
  comment: string;
  setComment: () => void;
  addComment: () => void;
  comments: IComment[];
}

interface IComment {
  comment: string;
  length?: number;
  _key: string;
  postedBy: {
    _ref: string; _id: string
  }
}

const Comments = ({}) => {
  // const [isPostingComment, setIsPostingComment] = useState(false)
  const isPostingComment = false
  const { userProfile } = useAuthStore();
  const comments = [];

  

  return (
    <div className='border-t-2 border-gray-200 pt-4 px-10 bg-[#F8F8F8]
    border-b-2 lg:pb-0 pb-[100px]'>
      <div className='overflow-scroll lg:h-[475px]'>
        {comments.length ? (
          <div>videos</div>
        ) : (
          <NoResults text="아직 답글이 없습니다. 첫 번째 답글을 달아보세요!" />
        )}
      </div>
      {userProfile && (
        <div className='absolute bottom-0 left-0 pb-6 px-2 md:px-10'>
          <form onSubmit={() => { }} className='flex gap-4'>
            <input
              type=""
              onChange={() => { }} 
              placeholder="Add Comment..."
              className='bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px]
              lg:w-[350px] border-gray-100 focus:outline-none focus:border-gray-300 flex-1 rounded-lg'
            />
            <button className='text-md text-gray-400' onClick={() => {}}>
              {isPostingComment ? 'Commenting...' :
              'Comment'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Comments