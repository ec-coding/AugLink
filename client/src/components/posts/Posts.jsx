import React from 'react'
import "./posts.scss"
import Post from '../post/Post'
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from '../../axios';

const Posts = ({userId}) => {

  const { isLoading, error, data } = useQuery(['posts'], () =>
    makeRequest.get("/posts?userId=" + userId).then(res => {
      return res.data;
    })
  );

  // const posts = [
  //   {
  //     id: 1,
  //     name: "David Sarif",
  //     userId: 1,
  //     profilePic: "https://pbs.twimg.com/media/FqvCGuWWwAQc0QJ.jpg",
  //     desc: "Sarif Industries is working around the clock to revolutionize modern biotechnology. Follow us today!",
  //     img: "https://revuecaptures.org/sites/default/files/SarifIndustriesMainPage.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "Lawrence Barrett",
  //     userId: 2,
  //     profilePic: "https://pbs.twimg.com/media/CtYTTTJWAAAxH8f.jpg",
  //     desc: "U lookin for thEse boy scout?",
  //     img: "https://media.snacksafely.com/wp-content/uploads/2019/11/Thin-Mints.jpg"
  //   },
  // ]

  return (
    <div className='posts'>
      {/* isLoading is a state that determines the load status of a component or feature */}
      {error ? "Something went wrong." : (isLoading ? "loading" : data.map(post => 
        <Post post={post} key={post.id} />))}
    </div>
  )
}

export default Posts
