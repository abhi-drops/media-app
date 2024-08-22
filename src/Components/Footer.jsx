import React from 'react'

function Footer() {
  return (
    <>
      <footer className="page-footer font-small blue pt-4 bg-white text-black">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase text-black">Media Player</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-black">Social Media</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" style={{color:"black"}}>Link 1</a></li>
                    <li><a href="#!" style={{color:"black"}}>Link 2</a></li>
                    <li><a href="#!" style={{color:"black"}}>Link 3</a></li>
                    <li><a href="#!" style={{color:"black"}}>Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-black">Links</h5>
                <ul className="list-unstyled ">
                    <li><a href="#!" style={{color:"black"}}>Link 1</a></li>
                    <li><a href="#!" style={{color:"black"}}>Link 2</a></li>
                    <li><a href="#!" style={{color:"black"}}>Link 3</a></li>
                    <li><a href="#!" style={{color:"black"}}>Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright:
        <a href="https://mdbootstrap.com/" style={{color:"blueviolet"}}> Mediaplayer.in </a>
    </div>

</footer>
    </>
  )
}

export default Footer