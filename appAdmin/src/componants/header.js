import Logo from '../imgs/Logo.PNG';

function Header(props){
    return <div>
       <nav class="navbar shadow bg-white navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img src={Logo} class="navbar-brand " />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav flex-column">
                        <a class="nav-link px-5" href="/main">
                            <i class="bi bi-house-door-fill"></i>   
                            Accueil
                        </a>
                        <a class="nav-link px-5" href="/Add">
                            <i class="bi bi-file-earmark-plus-fill"></i>
                            Ajouter un produit
                        </a>
                        <a class="nav-link px-5" href="/">
                            <i className="bi bi-person-circle"></i>
                            Mon Compte 
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
}

export default Header;