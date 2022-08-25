import type { NextPage } from 'next'
import axios from 'axios'
import { Video } from '../types'
import VideoCard from '../components/VideoCard'
import NoResults from '../components/NoResults'

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
          <NoResults text={"No Videos"} />
        )}
    </div>
  )
}

export const getServerSideProps = async () => {
  let { data } = await axios.get(`${process.env.API_BASE_URL}/post`);

  return {
    props: {
      videos: data
    }
  }
}

export default Home
