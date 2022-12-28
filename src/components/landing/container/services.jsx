import React from "react"
import ServiceItem from "../pure/ServiceItem"

import "../styles/services.css"
import img1 from "../../../assets/vectors/service_img1.svg"
import img2 from "../../../assets/vectors/service_img2.svg"
import img3 from "../../../assets/vectors/service_img3.svg"

const servicio1 = "Mantenimientos de Páginas Web"
const servicio2 = "Creación y Desarrollo de Páginas Web"
const servicio3 = "Creación y Desarrollo de ECommerce"

const textserv1 = "Exprimiremos tu página web hasta que enamore: bien posicionada en Google y demás buscadores web, segura, rápida y, sobretodo, eficaz y rentable para tu empresa, ¡atrayendo potenciales clientes y logrando resultados reales!"
const textserv2 = "Diseñamos tu página web con una estructura correcta que genere visitas diariamente y capte clientes reales que se sientan atraídos por tus productos o servicios."
const textserv3 = "¿Necesitas ayuda para crear tu propio Ecommerce? En WSD te ayudamos en el diseño y creación de tu tienda online a un precio muy competitivo"
export const Services = () => {
  return( 
  <section id="service">
  <div className="conten text-black bg-primary">
    <div className="titulo-servicios font-palanquin-dark text-white">
      <h1>SERVICIOS</h1>
    </div>
    <div className="tarjetas relative z-50">
      <div className="container-services">
        <ServiceItem data={{ imgSrc: img1, detalles: textserv1, titulo: servicio1 }} />
      </div>

      <div className="container-services">
        <ServiceItem data={{ imgSrc: img2, detalles: textserv2, titulo: servicio2 }} />
      </div>

      <div className="container-services">
        <ServiceItem data={{ imgSrc: img3, detalles: textserv3, titulo: servicio3 }} />
      </div>
    </div>

  </div>
  </section>
  )
}
