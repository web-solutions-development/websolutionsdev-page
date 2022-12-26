
import '../styles/news.css'

export const ProductCard = (props) => {
  const { image, description, date, source, url } = props.newsDetail;
  console.log()
  return (

    <div className="card">
      <div className="imgcont">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img className="imagen" src={image} alt="imagen cargando..." />
        </a>
      </div>
      <div className="contenido">
        <div className="fecha font-thin text-white">{new Date(date).toLocaleDateString()}, <u>{source}</u></div>
        <div className="detalles text-white">{description}</div>
      </div>
    </div>
  );
};


