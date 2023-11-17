import React, { useState, useEffect } from 'react';

export default function SavedData() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from local storage on component mount
    const data = localStorage.getItem('books');
    console.log(data);
    if (data) {
      setBooks(JSON.parse(data));
    }
  }, [localStorage.getItem('books')]);

  const handleDelete = (index) => {
    // Create a copy of the books array without the book to be deleted
    const updatedBooks = [...books.slice(0, index), ...books.slice(index + 1)];
    setBooks(updatedBooks);

    // Update local storage with the updated array
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

 
  return (
    <div>
       <>

<table className="table table-bordered">
      <thead>
      
        <tr >
          <th>Title</th>
          <th>author</th>
          <th>serial</th>
          <th>email</th>
          <th>price</th>
        </tr>
      </thead>

      
      <tbody>

        {books.map((book, index) => (
       
          <tr key ={index}>
         
            <td>{book.title}</td>  
            <td>{book.author}</td>
            <td>{book.serial}</td>
            <td>{book.email}</td> 
            <td>{book.price}</td>
            <td>

            <button className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal"> Update  </button>

            <button
          className="btn btn-danger" onClick={() => handleDelete(index)} >
          Delete
        </button>

          
         </td>
      </tr>
        ))}
      </tbody>
    </table>


    
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">You can Change here your Book Details</h5>
          
        
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">

        <input className="form-control my-2" placeholder="Change Book Name" type="text"/>
        <input className="form-control my-2" placeholder="Change Author" type="text"/>
        <input className="form-control my-2" placeholder="Change Serial" type="text"/>
        <input className="form-control my-2" placeholder="Change Email" type="text"/>
        <input className="form-control my-2" placeholder="Change Price" type="text"/>


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
