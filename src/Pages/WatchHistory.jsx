import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getVideoHistoryAPI } from '../../services/allAPI'

function WatchHistory() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const result = await getVideoHistoryAPI()
    if (result.status === 200) {
      setHistory(result.data)
      console.log(result.data)
    } else {
      console.log("API Failed")
      console.log(result.message)
    }
  }

  const removeVideoHistory= async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }

  return (
    <>
      <div className='container mt-5 mb-3 d-flex justify-content-between'>
        <h2>Watch History</h2>
        <Link style={{ textDecoration: 'none', color: 'blueviolet' }} to='/home'>
          Back To Home <i className='fa-solid fa-arrow-rotate-left fa-beat'></i>
        </Link>
      </div>

      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Url</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {history?.length > 0 ? (
            history?.map((video, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{video?.name}</td>
                <td>
                  <a href={video?.link} target='_blank' className='text-info' >
                    {video?.link}
                  </a>
                </td>
                <td>{video?.timeStamp}</td>
                <td>
                  <Button variant='danger' onClick={()=>removeVideoHistory(video.id)}>
                    <i className='fa-solid fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='5'>
                <p className='text-center'>Nothing To Display</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory
