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
  'https://picsum.photos/id/1/200/300',
  'https://picsum.photos/id/6/200/300',
  'https://picsum.photos/id/11/200/300'
]
function App() {
  return (
    <>
    <div className="landing" style={{color:"blue"}}>
    {/* fragments <> is used when we have to tags together so we need to put up a parent tag */}
    <Navbar/>
    <div className="headding text-center">
    <h1>GALLERY</h1>
     </div>
     <div className="row">
    {photos.map((photo)=><Card src={photo}/>)}
    </div>
    </div>
   </>
  );
}

export default App;
