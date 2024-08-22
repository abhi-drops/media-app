import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from "../Components/VideoCard";
import { getAllUploadedVideosAPI } from '../../services/allAPI';
function View({uploadVideoResponse}) {
  const[allVideos,setAllVideos]=useState([])

  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse])

  const getAllVideos = async()=>{
    const result = await getAllUploadedVideosAPI()
    console.log(result);

    if (result.status == 200) {
      console.log(result.data);
      setAllVideos(result.data)
    }else{
      console.log("api failed");
      setAllVideos([])
    }

  }

  console.log(allVideos);


  return (
    <>
      <Row>

        {
          allVideos?.length>0?allVideos.map(video=>(
            <Col  sm={12} md={4} lg={3} >
              <VideoCard video={video} />
            </Col>
          )):<p className='text-danger fw-bolder'>Nothing To Display</p>
        }

      </Row>
    </>
  )
}

export default View