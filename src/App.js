import { useState } from "react";
import {Navbar} from './components/navbar';
import {Card} from './components/card';
import './App.css';

const photos = [
  'https://picsum.photos/id/1001/200/200', 
  'https://picsum.photos/id/1002/200/200', 
  'https://picsum.photos/id/1003/200/200', 
  'https://picsum.photos/id/1004/200/200', 
  'https://picsum.photos/id/1005/200/200', 
  'https://picsum.photos/id/1006/200/200',
  // 'https://picsum.photos/id/1/200/300',
  // 'https://picsum.photos/id/6/200/300',
  // 'https://picsum.photos/id/11/200/300'
]
function App() {
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => {
    collapse(!isCollapsed);
  }
  return (
    <>
    
    {/* fragments <> is used when we have to tags together so we need to put up a parent tag */}
    <Navbar/>
    <div className="headding text-center">
    <button className="btn btn-warning mx-2" onClick={() => setItems([ 'https://picsum.photos/id/1009/200/200',...items])}>+Add</button>
    <button className="btn btn-success" onClick={toggle}>collapse</button>
    <h1>GALLERY</h1>
     </div>
     <div className="row">
    {photos.map((photo)=><Card src={photo}/>)}
    </div>
    
   </>
  );
}

export default App;
