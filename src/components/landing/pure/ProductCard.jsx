import React from "react"


import '../styles/news.css'

const ProductCard = props =>{
  let {imgSrc,detalles,fecha} = props.data ;
  return (
    
    <div className="card">
      <div className="imgcont">
        <img className="imagen" src={imgSrc} alt="imagen cargando..." />
      </div>
      <div className="contenido">
      <div className="fecha font-thin text-white">{fecha}</div>
      <div className="detalles text-white">{detalles}</div>
      </div>
    </div>
    );
};

export default ProductCard;

