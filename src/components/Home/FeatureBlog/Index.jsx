import React from 'react'
import { featurBlogs } from '../../../config/data'
import BlogItem from '../BlogList/BlogItem/Index';
import { Link } from 'react-router-dom'
import './Styles.css'
export default function FeatureBlog() {
  const featurBlog = featurBlogs
  return (
    <div className='card blog-card'>
      {featurBlog?.map((blog,i) => {

        return <>
          <div key={i} className='feature-blogitem-wrap'>
            <div className='feature-blog-item-img'>
              <img className='feature-blog-cover' src={blog.cover} alt="cover" />
            </div>
            <div className='feature-blog-item-detail'>
              <h3>{blog.title}</h3>
              {/* <p className='blog-desc'>{blog.description}</p> */}
              <div className='feature-blog-footer'>

                <div className='feature-blog-author'>
                  <img src={blog.authorAvatar} alt="avt" />
                  <h6>By : {blog.authorName}</h6>
                  <p>{blog.createdAt}</p>
                </div>
              </div>
              {/* <Chip label={blog.category} /> */}

              <footer>

                <Link className='feature-blog-link' to={`/blog/${blog.id}`}>
                  go
                </Link>
              </footer>
            </div>



          </div>
        </>
      })}
    </div>

  )
}
