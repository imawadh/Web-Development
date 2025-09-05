import styles from "./CardComponent.module.css"

export function CardComponent({ props }) {
    
    return (
      <div className="card mt-5" style={{ width: "20rem", height:"25rem"}}>
        <img className="card-img-top" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props.data.cloudinaryImageId}`} alt="Card image cap" />
        <div className="card-body">
          <h5 className={`card-title ${styles.clamp-1}`}>{props.data.name}</h5>
          <p className={`card-text ${styles.clamp-1}`}>
            {props.data.slugs.restaurant}
          </p>
          <div id={`productRating ${styles.clamp-1}`}>
            <span className="bi bi-star-fill text-success"></span> &nbsp;
            {props.data.avgRating} ({props.data.totalRatings})
          </div>
        
          <a href="#" className="btn btn-success w-45 position-absolute top-10">Buy Now</a>
          <a href="#" className="btn btn-primary w-45 float-end">Add to Cart</a>
        

        </div>
      </div>
    );
  }
  