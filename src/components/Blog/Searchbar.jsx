import React from 'react'

const BlogSearchbar=({pageType}) => {
  return (
    <div>
      {/* THis is the search bar for the blog pages */}
      {/* This will float on the left of the search bar */}<div>{/* Search form */}<form>{/* Search field */}<input type="text" name="" id="" />{/* Submit search button */}<input type="submit" value="" /></form></div>
      <div>
        <div>{/* Dropdown box to search through types of posts(Coding, Furry(IRL and Drawing), Drawing, Networking, General Life, Food, Tips, etc ...) */}</div>
        {pageType=="allPosts"? (<div>{/* allPosts Page enabled */}{/* Dropdown box wehre I cna soprt through all posts(A to Z, Oldest to Newest, Newest to Oldest, Most viewed, etc...) */}</div>):(<div className="disabled">{/* Disabled if page is not allPosts Page */}{/* Dropdown box wehre I cna soprt through all posts(A to Z, Oldest to Newest, Newest to Oldest, Most viewed, etc...) */}</div>)}
      </div>
    </div>
  )
}

export default BlogSearchbar