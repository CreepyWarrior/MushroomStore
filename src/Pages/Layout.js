import { Link, Outlet } from "react-router-dom"
import "../App.css"

const Layout = () => {
    return <div>
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class = "nav-item">
                    <a class="nav-link"><img src="imagenes/Logo_menu.png" /></a>
                </li>
                <li class = "nav-item">
                    <a class="nav-link"><Link to = "/">Menu</Link></a>
                </li>
                <li class = "nav-item">
                    <a class="nav-link"><Link to = "/tienda1">Tienda1</Link></a>
                </li>
            </ul>
            </div>
            </div>
        </nav>
        <hr />
        <Outlet />
    </div>
}

export default Layout