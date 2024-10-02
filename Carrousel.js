import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import imagen1 from "./imagenes/hello_kitty_and_friends_.jpg";
import imagen2 from "./imagenes/hk.png";
import imagen3 from "./imagenes/hk2.webp";

export function Carrousel() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/multimedia/hk2.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imagen2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imagen2} />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
