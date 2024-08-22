import React from 'react'
import { Row , Col , Card ,  Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


function Landingpage() {

  const navigateByUrl = useNavigate()
  
  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100 vh-100'>
        <Col></Col>
        <Col lg={5} >
          <h1 style={{color:"white",fontSize:"40px"}}>Welcome To <span  style={{color:"blueviolet",fontSize:"40px"}}>
            Media-Player</span> </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat illum sequi consectetur debitis optio, deserunt, laborum error quam nihil voluptatem, quae quaerat iure doloremque possimus id nobis fugit cum ipsam.</p>
          <Button onClick={()=>navigateByUrl('./home')} className='btn btn-info'>Get Started</Button>
        </Col>
        <Col lg={5}>
        <img src="https://cdn.pixabay.com/animation/2023/10/22/03/31/03-31-40-761_512.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>


      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-between w-100 pb-5">
        <h5 className='text-white mb-4' style={{fontSize:"40px"}}>Features</h5>
        <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">


        <Card style={{ width: '18rem' , color:"blueviolet"}}>
          <Card.Img variant="top" src="https://st2.depositphotos.com/1686288/9861/i/450/depositphotos_98619696-stock-photo-pink-abstract-digital-sound-wave.jpg" height={'300px'} width={'300px'} />
          <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text className='text-dark'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' , color:"blueviolet"}}>
          <Card.Img variant="top" src="https://st5.depositphotos.com/8066482/65981/i/450/depositphotos_659814198-stock-photo-sound-vibration-light-abstract-background.jpg" height={'300px'} width={'300px'} />
          <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text className='text-dark'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' , color:"blueviolet"}}>
          <Card.Img variant="top" src="https://st5.depositphotos.com/8066482/67247/i/450/depositphotos_672476642-stock-photo-digital-sound-waves-black-background.jpg" height={'300px'} width={'300px'} />
          <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text className='text-dark'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        </div>
      </div>

      <div className="container border rounded p-4 border-light  d-flex justify-content-center align-items-center mb-5 border-2 ">
        <div className="col-lg-5">
          <h4 className='text-info py-4 fw-bold'>Simple,Powerful & Fast</h4>
          <h6 className='mb-5 mt-4'><span className='text-info'>Play Everything </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum fuga voluptas repudiandae ducimus laborum perspiciatis, temporibus veritatis ratione ad ipsum consectetur quam rerum aut nulla laudantium consequatur perferendis neque dolorum.
          </h6>
          <h6 className='mb-5 mt-4'><span className='text-info'>Categorize Videos </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum fuga voluptas repudiandae ducimus laborum perspiciatis, temporibus veritatis ratione ad ipsum consectetur quam rerum aut nulla laudantium consequatur perferendis neque dolorum.
          </h6>
          <h6 className='mb-5 mt-4'><span className='text-info'>Managing Videos </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum fuga voluptas repudiandae ducimus laborum perspiciatis, temporibus veritatis ratione ad ipsum consectetur quam rerum aut nulla laudantium consequatur perferendis neque dolorum.
          </h6>
        </div>

        <div className="col-lg-5 ms-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TCpwN6Pip-U?si=d0Kr-qLdgaV3tnXa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>


    </>
  )
}

export default Landingpage