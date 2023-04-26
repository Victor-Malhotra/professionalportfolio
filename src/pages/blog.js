import React from 'react'
import BlogSearchbar from '@/components/Blog/Searchbar'
import BlogPost from '@/components/Blog/Post'

const blog = () => {
  return (
    <div>
      blog
      <div>{/* This the small navbar wich is either going t obe most recent or most biewed posts */}<BlogSearchbar pageType="mainBlog"/></div>
      <div>{/* This wil lbe the main section wehre a ranbom post wil lshow up (It will also be wehre the seachbar is and the all posts button) */}<BlogPost /></div>
    </div>
  )
}

export default blog