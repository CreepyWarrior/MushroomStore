import { Link } from "react-router-dom";
import "../App.css"

const Comprado = () => {
    return (
    <div className="App">
      <header className="App-header">
      <div class="row">
  <div class="col-6 mx-auto"> 
    <div class="card text-white mb-3 mt-5">
      <div class="card-body">
        <h5 class="card-subtitle">LA MEJOR TIENDA DE OBJETOS DE TODO EL REINO CHAMPIÑON:</h5> 
        <h5 class = "card-title">GRACIAS POR SU COMPRA</h5>
        <a class="nav-link"><img src="imagenes/hongo_dorado.webp" width="150px" /></a>
        <div class = "texto">Estamos emocionados de que hayas elegido nuestros Power-Ups para ayudarte en tus aventuras. ¡Esperamos que te diviertas mucho usándolos!

Recuerda que siempre estamos aquí para ayudarte. ¡Hasta pronto! 🍄</div>
        
      </div>
    </div>
  </div>
</div>

      </header>
    </div>
    );
}

export default Comprado