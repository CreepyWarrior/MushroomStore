import { Link } from "react-router-dom";
import "../App.css"

const Tienda2 = () => {
    return (
        <div className="App">
          <header className="App-header">
            <div class="row">
                <div class="col-md-3" margin-left = "100px">
                    <div class="card text-white mb-3 mt-5">
                        <div class="card-body">
                            <h5 class="card-subtitle">LA MEJOR TIENDA DE OBJETOS DE TODO EL REINO CHAMPIÑON:</h5> 
                            <a class="nav-link"><img src="imagenes/Flor_fuego.webp" width="150px" /></a>
                            <h5 class = "texto">FIRE FLOWER</h5>
                            <p>¿Quieres quemar a tus enemigos? ¡La flor de fuego es para ti! Con un solo toque, podrás lanzar bolas de fuego que destruirán a tus enemigos con facilidad. ¡Prepárate para quemar el camino hacia la victoria!</p>
                            <button><Link to = "/comprado">Comprar</Link> </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 ">
                <div class="card text-white mb-3 mt-5">
                        <div class="card-body">
                            <h5 class="card-subtitle">LA MEJOR TIENDA DE OBJETOS DE TODO EL REINO CHAMPIÑON:</h5> 
                            <a class="nav-link"><img src="imagenes/Flor_hielo.webp" width="150px" /></a>
                            <h5 class = "texto">ICE FLOWER</h5>
                            <p>¿Quieres convertirte en un maestro del hielo y congelar a tus enemigos? Con un solo toque, podrás lanzar bolas de hielo que congelarán a tus enemigos. ¡No te preocupes por los Koopas, porque este poder los dejará helados!</p>
                            <button><Link to = "/comprado">Comprar</Link> </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                <div class="card text-white mb-3 mt-5">
                        <div class="card-body">
                            <h5 class="card-subtitle">LA MEJOR TIENDA DE OBJETOS DE TODO EL REINO CHAMPIÑON:</h5> 
                            <a class="nav-link"><img src="imagenes/Flor_dorada.webp" width="150px" /></a>
                            <h5 class = "texto">GOLDEN FLOWER</h5>
                            <p>Quieres convertirte en un héroe de oro? Con un solo toque, podrás convertirte a cada enemigo que toques en oro y disparar bolas de oro que destruirán todo. ¡Prepárate para convertirte en el héroe más rico del Reino Champiñón!</p>
                            <div class = "row">
                                <table>
                                <tr>
                                    <td>
                                    <a class="nav-link"><img src="imagenes/Mon.jpg" width="50px" /></a>
                                    </td>
                                    <td>Edad</td>
                                </tr>
                                </table>
                            </div>
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

export default Tienda2