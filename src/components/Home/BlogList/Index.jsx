import React from 'react';
import './Styles.css';
import BlogItem from './BlogItem/Index';
 const BlogList = ({blogs}) => {
  return (
    <div className='blog-wrap'>
        {blogs.map(blog=>{
            return <BlogItem blog={blog} key={blog.id}/>
        })}
    </div>
  )
}
export default BlogList
