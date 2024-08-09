import { Link } from "react-router-dom";
import "../App.css"

const Menu = () => {
    return (
    <div className="App">
      <header className="App-header">
      <div class="row">
  <div class="col-6 mx-auto"> 
    <div class="card text-white mb-3 mt-5">
      <div class="card-body">
        <h5 class="card-subtitle">LA MEJOR TIENDA DE OBJETOS DE TODO EL REINO CHAMPIÑON:</h5> 
        <h5 class = "card-title">MUSHROOM STORE</h5>
        <video src="imagenes/video_inicio.mp4" width="600px" controls></video>
        <div class = "texto">Bienvenidos a MushroomStore, tu tienda de confianza para todos los power-ups de Super Mario! Aquí encontrarás todo lo que necesitas para convertirte en el héroe de tus sueños.</div>
        <button><Link to = "/tienda1">Comprar</Link> </button>
      </div>
    </div>
  </div>
</div>

      </header>
    </div>
    );
}

export default Menu