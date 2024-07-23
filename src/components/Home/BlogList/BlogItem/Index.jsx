import React from 'react'
import './Styles.css'
import {Link} from 'react-router-dom'
import Chip from '../../../Common/Chip/Index'
const BlogItem = ({ blog }) => {
  return (
    <div className='blogitem-wrap'>
      <img className='blog-cover' src={blog.cover} alt="cover" />
      <Chip label={blog.category} />
      <h3>{blog.title}</h3>
      <p className='blog-desc'>{blog.description}</p>

      <footer>
        <div className='blog-footer'>
          
          <div className='blog-author'>
          <img src={blog.authorAvatar} alt="avt" />
            <h6>{blog.autorname}</h6>
            <p>{blog.createdAt}</p>
          </div>
        </div>
        <Link className='blog-link' to={`/blog/${blog.id}`}>
          go
        </Link>
      </footer>
    </div>


  )
}

export default BlogItem