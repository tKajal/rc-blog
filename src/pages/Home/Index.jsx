import React, { useState } from 'react'
import Header from '../../components/Home/Header/Index'
import SearchBar from '../../components/Home/SearchBar/Index'
import BlogList from '../../components/Home/BlogList/Index'
import EmptyData from '../../components/Common/EmptyData/Index'
import { blogListData } from '../../config/data'
import FeatureBlog from '../../components/Home/FeatureBlog/Index'
import './Styles.css'

export default function Home() {

  const [searchKey, setSearchKey] = useState('')
  const [blogsList, setBlogs] = useState(blogListData)


  function handleSubmits(event) {
    event.preventDefault();
    handleSearch();
  }

  function handleSearch() {
    const allBlogs = blogListData;
    const filteredBlogs = allBlogs.filter((blog) => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setBlogs(filteredBlogs)
  }

  function handleClearSearch() {
    setBlogs(blogListData);
    setSearchKey('');
  }

  return (
    <div>
      <Header />
      <SearchBar value={searchKey} handlSubmit={handleSubmits} handleSearchKey={e => setSearchKey(e.target.value)} clearSearch={handleClearSearch} />
      <div className='content'>
        {blogsList.length > 0 ? <BlogList blogs={blogsList} /> : <EmptyData />}
        <div className='feature-blogs'>
          <FeatureBlog />
        </div>
      </div>

    </div>
  )
}

