import React from 'react'
import BlogSearchbar from '@/components/Blog/Searchbar'
import BlogThumbnail from '@/components/Blog/Thumbnail'

const allPosts = () => {
  return (
    <div>
      allPosts
  <div>{/* This the small navbar wich is either going t obe most recent or most biewed posts */}<BlogSearchbar pageType="allPosts" /></div>
      <div>{/* Here will be all posts wich will start of as Newwest to Oldest -Probably use flex box to align the posts*/}{posts.map((post,index) => {<BlogThumbnail blogID={post.id} key={index} />})}</div>
    </div>
  )
}

export default allPosts