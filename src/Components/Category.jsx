// This React component allows users to add a new video category. It features a button to open a modal form where users can input the category name. Upon submission, it validates the input and sends the data to an API. If the submission is successful, it resets the input field and closes the modal; otherwise, it alerts the user with an appropriate message.


import {React,useEffect,useState} from 'react'
import {Button,Modal,FloatingLabel,Form, Row, Col} from 'react-bootstrap';
import { addVideoCategoryAPI, deleteCategoryAPI, getAVideosAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';


function Category({dropVideoResponse}) {

  const [categoryName , setCategoryName] = useState("")
  const [allCategories , setAllCategories] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async()=>{
    const result = await addVideoCategoryAPI({categoryName,allVideo:[]})

  if (categoryName) {

    if (result.status>=200 && result.status<300) {
      handleClose()
      getCategories()
      setCategoryName("")

    }else{
      alert(result.message)
    }
  }else{
    alert("please fill missing field")
  }
}

useEffect(()=>{
  getCategories()
},[dropVideoResponse])

const getCategories = async ()=>{
  const {data} = await getVideoCategoryAPI()
  setAllCategories(data)
}





const removeCategory = async (id) => {
  await deleteCategoryAPI(id)
  getCategories()

}

const dragOver = (e)=>{
  console.log("video card dragged over the category");
  e.preventDefault()
}

const videoDropped = async (e,categoryId)=>{
  const VideoId = e.dataTransfer.getData("videoid")
  console.log("Video Id " + VideoId , "dropped into the "+categoryId);

  const {data} = await getAVideosAPI(VideoId)

  const selectedCategory = allCategories.find(item=>item.id===categoryId)
  selectedCategory.allVideo.push(data)

  const res = await updateCategoryAPI(categoryId,selectedCategory)

}

const videoDragStarted=(e,videoId,categoryId)=>{
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
}

  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-info'> Add Category</button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
          <FloatingLabel controlId='floatingName' label='Category' className='mb-3' >
            <Form.Control type='text' placeholder='Enter Category Name' onChange={e =>setCategoryName( e.target.value)} />
          </FloatingLabel>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {
        allCategories?.length>0?allCategories.map((category,index)=>(


              <div key={index} className="border rounded p-4 m-3" droppable="true"  onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e,category?.id)} >
              <div  className="d-flex justify-content-between align-items-center">
                <h5>{category?.categoryName}</h5>
                <button className='btn ' onClick={()=>{removeCategory(category?.id)}}><i className='fa-solid fa-trash text-danger'></i></button>
              </div>

              <div>
                <Row>
                  {category.allVideo?.length>0?category.allVideo.map(card=>(
                    <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                        <VideoCard video={card} insideCategory={true} />
                    </Col>
                  )):null}
                </Row>

              </div>
            </div>


        )):<p>Nothing To display</p>
      }


    </>
  )
}

export default Category