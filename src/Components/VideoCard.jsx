import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryAPI } from '../../services/allAPI';


function VideoCard({video,removeVideo,insideCategory}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
    const {name,link} = video;
    let today = new Date()
    // console.log(new Intl.DateTimeFormat('en-US',{year:"numeric" ,month:"2-digit", day:"2-digit" , hour:"2-digit" , minute:"2-digit",second:"2-digit"}).format(today));
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:"numeric" ,month:"2-digit", day:"2-digit" , hour:"2-digit" , minute:"2-digit",second:"2-digit"}).format(today)

    let videoHistory = {name,link,timeStamp}

    await addVideoHistoryAPI(videoHistory)


  };

  const dragStarted = (e,id)=>{
    console.log("drag started",id);
    e.dataTransfer.setData("videoid",id)

  }


  return (
    <>
    <Card style={{ width: '17rem' }} draggable onDragStart={(e)=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" src={video?.url} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center py-2'>
          <h5>{video?.name}</h5>
          {
            insideCategory?null:<Button onClick={()=>{removeVideo(video.id)}} variant="danger"><i class="fa-solid fa-trash"></i></Button>
          }


        </Card.Title>

      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={video?.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard