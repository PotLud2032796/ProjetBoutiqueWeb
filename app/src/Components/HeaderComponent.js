import logo from '../Ressources/Logo.png';

function HeaderComponent(props) {
    return <div className="container-fluid p-2 m-0 shadow row align-items-center" id="header">
        {/*HEADER*/}
        <div className="col-2 p-2">
            <img src={logo} className="img-fluid"/>
        </div>

        {/*NAVBAR*/}
        <nav className="navbar navbar-light col justify-content-start">
            <ul className="navbar-nav d-flex">
                <li className="nav-item">
                    <strong><a className="nav-link" href="/">Page Principal</a></strong>
                </li>
                <li className="nav-item">
                    <strong><a className="nav-link" href="/Produit">Panier</a></strong>
                </li>
            </ul>
        </nav>

        {/*SEARCHBAR*/}
        <div className="col-6 m-0 p-4 align-self-end">
            <img src="https://via.placeholder.com/800x200" className="card-img-top rounded mb-2"/>
            <div className="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn">
                  <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    </div>
}

export default HeaderComponent;