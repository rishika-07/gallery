export function Card({ path, title}){
    return(
     <div className="col mb-5">
  <div class="card" style={{width: "15rem", height:"17rem",  padding:"2px"}}>
  <img src={path} className="card-img-top" alt={title} />
  {/* <div class="card-body">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> */}
  </div>
  </div>
    );
}
export default Card;