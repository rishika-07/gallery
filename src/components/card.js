export function Card(props){
    return(
     <div className="col mb-5">
  <div class="card" style={{width: "18rem", margin:"2rem", padding:"2px",}}>
  <img src={props.src} class="card-img-top" alt="{props.src}"/>
  {/* <div class="card-body">
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> */}
  </div>
  </div>
    );
}