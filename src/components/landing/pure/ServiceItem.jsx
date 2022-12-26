import React from "react"

const ServiceItem = props => {
  let { imgSrc, detalles, titulo } = props.data;
  return (
    <div className="tarjeta border-b-primary-option border-b-2 bg-white z-50">

      <div className="imagen-services bg-white">
        <img className="img-servicio " src={imgSrc} />
        <div className="centrado text-black font-bold uppercase">{detalles}</div>

      </div>
      <div className="titulo-serv bg-secondary text-white font-inter">
        <div>{titulo}</div>
      </div>


    </div>
  )
}
export default ServiceItem;