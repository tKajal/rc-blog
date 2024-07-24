import React from 'react'
import './Styles.css'
import { Link } from 'react-router-dom'
import Chip from '../../../Common/Chip/Index'
const BlogItem = ({ blog }) => {
  return (
    <div className='blogitem-wrap'>
      <div className='blog-item-img'>
        <img className='blog-cover' src={blog.cover} alt="cover" />
      </div>
      <div className='blog-item-detail'>
        <h3>{blog.title}</h3>
        <p className='blog-desc'>{blog.description}</p>
        <div className='blog-footer'>

          <div className='blog-author'>
            <img src={blog.authorAvatar} alt="avt" />
            <h6>By : {blog.authorName}</h6>
            <p>{blog.createdAt}</p>
          </div>
        </div>
        {/* <Chip label={blog.category} /> */}

        <footer>

          <Link className='blog-link' to={`/blog/${blog.id}`}>
            go
          </Link>
        </footer>
      </div>



    </div>


  )
}

export default BlogItem