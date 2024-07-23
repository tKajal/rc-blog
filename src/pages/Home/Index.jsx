import React, { Component, useState } from 'react'
import Header from '../../components/Home/Header/Index'
import SearchBar from '../../components/Home/SearchBar/Index'
import BlogList from '../../components/Home/BlogList/Index'
import { blogList } from '../../config/data'


export default function Home() {

  const {searchKey, setSearchKey} = useState('')

  // function handleSearchChange(){
  //   const allBlogs=blogList;
  //   const filteredBlogs=blogList.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()))
  // }

  function handleChange(){

  }
  return (
    <div>
    <Header />
    <SearchBar value={searchKey} />
    <BlogList blogs={blogList} />
  </div>
  )
}

