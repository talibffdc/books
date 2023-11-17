import React from 'react'

export default function Addbook() {
  return (
    <>

        <div className="container mt-5">
        <h1>Book Management System</h1>
        <button className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal"> Add Books  </button>
     
        

      <div className="modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>


      </>
  )
}
