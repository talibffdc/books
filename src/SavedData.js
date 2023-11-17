import React from 'react'

export default function SavedData() {
  return (
    <div>
       <>

<table className="table table-bordered">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Author</th>
          <th>Serial Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
       
          <tr>
          {/* where i call the data that will be entered by user */}
            <td>Book Name</td>  
            <td>Author</td>
            <td>Serial Number</td>
            <td>Email</td>
            <td>
            <button
          className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"> Update  </button>

            
            <button  className="btn btn-danger">Delete </button>
      
          
         </td>
      </tr>
      </tbody>
    </table>


  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          
        
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">

        <input className="form-control my-2" placeholder="Change Book Name" type="text"/>
        <input className="form-control my-2" placeholder="Change Author" type="text"/>
        <input className="form-control my-2" placeholder="Change Serial" type="text"/>
        <input className="form-control my-2" placeholder="Change Email" type="text"/>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

</>
    </div>
  )
}
