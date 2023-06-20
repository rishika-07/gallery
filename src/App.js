import { useState } from "react";
import {Navbar} from "./components/navbar";
import {Card} from "./components/card";
import UploadForm from "./components/UploadForm";
import "./App.css";

const photos = [
  'https://picsum.photos/id/1001/200/200', 
  'https://picsum.photos/id/1002/200/200', 
  'https://picsum.photos/id/1003/200/200', 
  'https://picsum.photos/id/1004/200/200', 
  'https://picsum.photos/id/1005/200/200', 
  'https://picsum.photos/id/1006/200/200'
]

function App() {
  const [inputs, setInputs] = useState({title:null , file:null, path:null})
  //this tells how we are going to handle our inputs
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => collapse(!isCollapsed);
  const handleOnChange = (e) =>{
    if (e.target.name ==='file'){ setInputs({...inputs,file:e.target.files[0],path: URL.createObjectURL(e.target.files[0])}) 
  }
  else {
    setInputs({...inputs,title: e.target.value})
  }
}
  // the above line takes all the input user enters 
  const handleOnSubmit = (e) => {
    e.preventDefault()
    // e=>event  "e.preventDefault()" prevents the page to refresh after the value or image from the user side as has been
    // updated. kyunki iska forms ka default funstion hota hai page ko refresh krne wala!!!
    setItems([inputs.path,...items])
  }
  //input given by user auto updates in our already available list / array of items


  return (
    <>
      <Navbar />
     
      <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>{isCollapsed ? 'Close' : '+ Add'}</button>
        
        <div className="clearfix mb-4"></div>
        <UploadForm isVisible={isCollapsed}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}/>
        <h1>Gallery</h1> 
        <div className="row">
          {items.map((photo, index) => <Card key={index} src={photo}/>)}
        </div>
      </div>
    </>
  );
 
}
export default App;

