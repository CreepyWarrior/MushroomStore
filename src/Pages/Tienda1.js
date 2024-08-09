import{ Link } from "react-router-dom";
import "../App.css"

const Tienda1 = () => {
    return (
        <div className="App">
          <header className="App-header">
            <div class="row">
                <div class="col-md-3" margin-left = "100px">
                    <div class="card text-white mb-3 mt-5">
                        <div class="card-body">
                            <h5 class="card-subtitle">LA MEJOR TIENDA DE OBJETOS DE TODO EL REINO CHAMPIÑON:</h5> 
                            <a class="nav-link"><img src="imagenes/hongo_rojo.webp" width="150px" /></a>
                            <h5 class = "texto">MUSHROOM</h5>
                            <p>¿Quieres crecer? ¡El Champiñón es para ti! Con solo un toque, te volverás más grande y más resistente. ¡No te preocupes por los enemigos, porque este hongo está lleno de poder!</p>
                            <button><Link to = "/comprado">Comprar</Link> </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ">
                <div class="card text-white mb-3 mt-5">
                        <div class="card-body">
                            <h5 class="card-subtitle">LA MEJOR TIENDA DE OBJETOS DE TODO EL REINO CHAMPIÑON:</h5> 
                            <a class="nav-link"><img src="imagenes/hongo_morado.webp" width="150px" /></a>
                            <h5 class = "texto">POISON MUSHROOM</h5>
                            <p>¿Eres valiente? El Hongo Venenoso es para los intrépidos, te permite caminar sobre el agua y atravesar muros. ¡Desafía las leyes de la física y sorprende a tus amigos!</p>
                            <button><Link to = "/comprado">Comprar</Link> </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                <div class="card text-white mb-3 mt-5">
                        <div class="card-body">
                            <h5 class="card-subtitle">LA MEJOR TIENDA DE OBJETOS DE TODO EL REINO CHAMPIÑON:</h5> 
                            <a class="nav-link"><img src="imagenes/hongo_verde.png" width="150px" /></a>
                            <h5 class = "texto">1UP MUSHROOM</h5>
                            <p>¡No te rindas! ¡El hongo de vida extra te da una segunda oportunidad! No importa cuántas veces te derriben, ¡el hongo verde te ayudará a volver a la batalla con más fuerza!</p>
                            <button><Link to = "/comprado">Comprar</Link> </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <button class="btn btn-outline-dark" data-mdb-ripple-init data-mdb-ripple-color="dark"><Link to = "/tienda1">1</Link></button>
                    <button class="btn btn-outline-dark" data-mdb-ripple-init data-mdb-ripple-color="dark"><Link to = "/tienda2">2</Link></button>
                </div>
            </div>
          </header>
        </div>
        );
}

export default Tienda1