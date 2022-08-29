import React from 'react';
import { MdOutlineVideocamOff } from 'react-icons/md'
import { BiCommentX } from 'react-icons/bi'

interface Props {
  text: string;
}

const NoResults = ({ text }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center
    h-full w-full'>
      <p className='text-8xl'>
        {text === '아직 답글이 없습니다. 첫 번째 답글을 달아보세요!' ?
          <BiCommentX /> :
          <MdOutlineVideocamOff />
        }
      </p>
      <p className='text-2xl text-center'>
        {text}
      </p>
    </div>
  )
}

export default NoResults