import "../../styles/heroCards.css";
import CardImage from "../../assets/features/hero-card-img.png";
import ExplorarIcono from "../../assets/iconos/explorar-icono.svg";

const HeroCards = () => {
  return (
    <div id="hero-card">
      <div className="card-text">
        <h4>Encuentra tu destino idel con ReTu</h4>
        <p>
          Haz el test y encuentra el lugar perfecto para tu próxima aventura.
        </p>
      </div>
      <div className="card-img">
        <img src={CardImage} alt="Imagen card" />
        <button className="explorar-btn rounder-xl">
          <span>Explorar</span>
          <img src={ExplorarIcono} />
        </button>
      </div>
    </div>
  );
};

export default HeroCards;
