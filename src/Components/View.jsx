import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from "../Components/VideoCard";
import { deleteVideosAPI, getAllUploadedVideosAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
function View({uploadVideoResponse,setDropVideoResponse}) {
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


  const removeVideo = async(id)=>{
    await deleteVideosAPI(id)
    getAllVideos()
  }

  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDropped=async (e)=>{

    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
     console.log(videoId,categoryId);
    const {data} = await getVideoCategoryAPI()
    const selectedCategory = data.find(item=>item.id==categoryId)
    const result = selectedCategory.allVideo.filter(video=>video.id!==videoId)
    console.log(result);
    let{id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allVideo:result}
    console.log(newCategory);
    const res = await updateCategoryAPI(categoryId,newCategory)
    console.log(res);
    setDropVideoResponse(res)

  }


  return (
    <>
      <Row droppable='true' onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>

        {
          allVideos?.length>0?allVideos.map(video=>(
            <Col  sm={12} md={4} lg={3} >
              <VideoCard video={video} removeVideo={removeVideo} />
            </Col>
          )):<p className='text-danger fw-bolder'>Nothing To Display</p>
        }

      </Row>
    </>
  )
}

export default View