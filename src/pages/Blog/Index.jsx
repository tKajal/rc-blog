import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Styles.css'
import { blogListData } from '../../config/data'
import Chip from '../../components/Common/Chip/Index';

export default function Blog() {
  const { id } = useParams('id');
  const [blog, setBlog] = useState()

  useEffect(() => {
    const blogList = blogListData;
    const blogItem = blogList.find(blog => blog.id === parseInt(id))
    setBlog(blogItem)
    console.log(blogItem)
  }, [id])
  return (
    <div >
      <div className='link-wrap'>
        <Link to="/home">back</Link>
      </div>
      {
        blog ?
          <div className='blog-detail' >
            <header>

              <p><span className='created-date'>Published:{blog?.createdAt}</span></p>
              <h1>{blog?.title}</h1>
              <div className='subcat-wrap'>
                {blog?.subcategory.map((cat, i) => { return <Chip key={i} label={cat} /> })
                }
              </div>

            </header>
            <img src={blog.cover} alt='blog-img' />
            <p className='blog-desc'>{blog.description}</p>
          </div> : null
      }

    </div>
  )
}

