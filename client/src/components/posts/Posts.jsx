import React from 'react'
import "./posts.scss"
import Post from '../post/Post'

const Posts = () => {

  // TEMP DATA
  const posts = [
    {
      id: 1,
      name: "David Sarif",
      userId: 1,
      profilePic: "https://pbs.twimg.com/media/FqvCGuWWwAQc0QJ.jpg",
      desc: "Sarif Industries is working around the clock to revolutionize modern biotechnology. Follow us today!",
      img: "https://revuecaptures.org/sites/default/files/SarifIndustriesMainPage.jpg"
    },
    {
      id: 2,
      name: "Lawrence Barrett",
      userId: 2,
      profilePic: "https://pbs.twimg.com/media/CtYTTTJWAAAxH8f.jpg",
      desc: "U lookin for thEse boy scout?",
      img: "https://media.snacksafely.com/wp-content/uploads/2019/11/Thin-Mints.jpg"
    },
  ]

  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts
