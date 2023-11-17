import './App.css';
import React from 'react';
import SavedData from './SavedData';

function App() {
  return (
    <>
    <div className="container mt-4">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Book Name</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Author</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Serial Number</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>  
    <br/>

    <SavedData/>

  </>
  );
}

export default App;
