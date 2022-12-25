import React from "react"
import ServiceItem from "../pure/ServiceItem"

import "../styles/services.css"
import img1 from "../../../assets/images/servicio1.jpg"
import img2 from "../../../assets/images/servicio2.jpeg"
import img3 from "../../../assets/images/servicio3.jpg"

const servicio1 = "Mantenimientos de Páginas Web"
const servicio2 = "Creación y Desarrollo de Páginas Web"
const servicio3 = "Creación y Desarrollo de ECommerce"

const textserv1 = "Ayudamos a la mejora y evolucion de tu pagina web, con nuestra experiencia en el mercado digital."
const textserv2 = "Diseñamos y implementasmos una pagina web hecha a la medida de nuestros clientes."
const textserv3 = "Nos especializamos en la creacion y diseño de E-Commerce super seguros y intuitivos a la vista."
export const Services = () => {
  return <div className="conten text-black bg-primary">
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
}
