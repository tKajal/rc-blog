import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Styles.css'
import { blogListData } from '../../config/data'
import Chip from '../../components/Common/Chip/Index';
import BlogList from '../../components/Home/BlogList/Index';
import FeatureBlog from '../../components/Home/FeatureBlog/Index';
import Header
 from '../../components/Home/Header/Index';

import TopNav from '../../components/Common/TopNav/Index'; 
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
    <div className='container blog-bt'>
      <div className='link-wrap'>
        <Link to="/home">back</Link>
      </div>
      <div className='top-nav'>
            <TopNav />
        </div>

      {
        blog ?
          <div className='blog-detail' >
            <header>

              
              <h1 className='blog-t'>{blog?.title}</h1>
              <p><span className='created-date'>Published:{blog?.createdAt}</span></p>
            </header>
            <img src={blog.cover} alt='blog-img' />
            <p className='blog-desc'>{blog.description}</p>
            <p className="title usmall">Categorized in:</p>
            <div className='subcat-wrap'>
                {blog?.subcategory.map((cat, i) => { return <span key={i} label={cat} >{cat}</span> })
                }
              </div>

          </div> : null
      }

    </div>



    // <div className='feature-blog-card blog-card'>
    //   <h3 class="widget-title">Popular Posts</h3>
    //   {
    //     blog ?

       
    //       <div className='feature-blogitem-wrap'>
    //         <div className='feature-blog-item-img'>
    //           <img className='feature-blog-cover' src={blog.cover} alt="cover" />
    //         </div>
    //         <div className='feature-blog-item-detail'>
    //           {/* <h3>{blog.title}</h3> */}
    //           <div className='blog-desc'>
    //             <p>{blog.description}</p>
    //             <p>{blog.createdAt}</p>
    //           </div>

    //           <div className='feature-blog-footer'>

    //             {/* <div className='feature-blog-author'>
    //               <img src={blog.authorAvatar} alt="avt" />
    //               <h6>By : {blog.authorName}</h6>
    //               <p>{blog.createdAt}</p>
    //             </div> */}

    //           </div>
    //           {/* <Chip label={blog.category} /> */}

    //           <footer>

    //             <Link className='feature-blog-link' to={`/blog/${blog.id}`}>
    //               go
    //             </Link>
    //           </footer>
    //         </div>



    //       </div>
       
    //  :null
    // }
    // </div>
       
    // <div className='content container'>
    //     <Header />
    //     {<BlogList blogs={[blog]} />}
    //     <div className='feature-blogs'>
    //       <FeatureBlog />
    //     </div>
    //   </div>
  )
}

