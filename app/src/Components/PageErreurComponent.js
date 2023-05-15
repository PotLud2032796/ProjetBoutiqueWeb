import logo from '../Ressources/Logo.png';
import titre from '../Ressources/Titre.png';

function PageErreurComponent(props) {
    var page = <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <img src={logo} className="img-fluid"/>
                </div>
                <div className="w-100"/>
                <div className="col-6">
                    <h1 id="messageErreur">Oups! Vous semblez être perdu!</h1>
                    <a href="/" className="btn w-100 h-50 mt-5 d-flex align-items-center justify-content-center">Retourner à la page d'accueil</a>
                </div>
            </div>
        </div>
    </>

    return page;
}

export default PageErreurComponent;