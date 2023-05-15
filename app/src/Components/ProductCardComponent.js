function ProductCardComponent(props) {
    const route = `/Produit/${props.id}`;
    
    //OBJET RETOURNE
    return <div className="col">
            <div className="card shadow p-2">
                <div className="container">
                    <div className="row">
                        {/*IMAGE*/}
                        <div className="col-8">
                            <a href={route}><img src={props.image} className="card-img-top rounded"/></a>
                        </div>

                        {/*BODY*/}
                        <div className="col-4">
                            <div className="container h-100 p-0">
                                <div className="row h-50">
                                    <div className="col">
                                        <h5 className="card-title">{props.nom}</h5>
                                        <hr className="mt-1"/>
                                        <p className="card-text">Prix : {props.prix}$</p>
                                    </div>
                                </div>
                                <div className="row h-50">
                                    <div className="col  align-items-end align-self-end">
                                        <hr className="mt-1"/>
                                        <p className="card-text">{props.disponible}</p>
                                        <a href={route} className="btn w-100">Voir détails</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default ProductCardComponent;