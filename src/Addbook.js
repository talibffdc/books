import React, { useState, useEffect} from 'react';

export default function Addbook() {

         const[books, setBooks]=useState([]);



    const [title, setTitle]=useState('');
    const[author, setAuthor]=useState('');
    const [serial, setSerial]=useState('');
    const [email, setEmail]=useState('');
    const [price, setPrice]=useState('');

    
//   form ko summit karne ke liye event

const handleAddBookSubmit=(e)=>{
    e.preventDefault();

    // create a object
    let book={
        title,
        author,
        serial,
        email,
        price
    }

    
    const data=[...books, book];

    localStorage.setItem('books', JSON.stringify(data));
//  ye likha h mene jisse bhari hui fields meri empty ho jaaye, agar ye nhi likhenge to jo data fill kia hua haun wo fill hi rahega in input fields main.
    setTitle('');
    setAuthor('');
    setSerial('');
    setEmail('');
    setPrice('');

}

// saving data to local storage
     

   


  return (
    <>

        <div className="container mt-5">
        <h1>Book Management System</h1>
        <button className="btn btn-primary mb-3"  data-bs-toggle="modal" data-bs-target="#addbookmodal"   > Add Books  </button>
     
        

      <div className="modal" id="addbookmodal" tabIndex="-1">

  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add your Book in your List</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        <input className="form-control my-2" placeholder="Title" type="text"  onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <input className="form-control my-2" placeholder="Author" type="text"     onChange={(e)=>setAuthor(e.target.value)} value={author}/>
        <input className="form-control my-2" placeholder="Serial No." type="text" onChange={(e)=>setSerial(e.target.value)} value={serial}/>
        <input className="form-control my-2" placeholder="Email" type="text"      onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input className="form-control my-2" placeholder="Price" type="text"      onChange={(e)=>setPrice(e.target.value)} value={price}/>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleAddBookSubmit} data-bs-dismiss="modal">Submit</button>

            

      </div>
    </div>
  </div>
</div>
</div>


      </>
  )
}
