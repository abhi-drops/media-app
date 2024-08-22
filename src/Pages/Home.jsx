import React, { useState } from 'react'
import Add from '../Components/Add'
import Category from "../Components/Category";
import { Link } from 'react-router-dom'
import View from '../Components/View';

function Home() {
  const[uploadVideoResponse,setUploadvideoResponse]=useState({})
  return (
    <div className="">
      <div className="container mt-3 mb-3 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadvideoResponse={setUploadvideoResponse}/>
        </div>

        <Link to={'/watch-history'} style={{textDecoration:"none" , color:"blueviolet" , fontSize:"30px"}}>Watch History <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
      </div>

      <div className="container-fluid mt-5 mb-3 row">
        <div className="all-videos col-lg-9">
          <h2>All-Videos</h2>
          <View uploadVideoResponse={uploadVideoResponse} />
        </div>

        <div className="category col-lg-3">
        <Category/>
        </div>

      </div>

    </div>
  )
}

export default Home