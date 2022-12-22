import React from "react"

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/news.css'
// import { Card } from 'react-bootstrap'

const ProductCard = props => {
  const { imgSrc, price, fecha } = props.data;
  return (
    <div>
      a
    </div>
    // <Card className="p-0 overflow-hidden  rounded-t-3xl ">
    //   <div className=" overflow-hidden  p-0 ">
    //     <Card.Img className="img" variant="top" src={imgSrc} />
    //   </div>
    //   <Card.Body className="contenText text-center ">
    //     <Card.Title className="text-left ">{fecha}</Card.Title>
    //     <Card.Title className="display-8 text-left ">{price}</Card.Title>

    //   </Card.Body>

    // </Card>
  );
};

export default ProductCard;

