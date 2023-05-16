import { useLoaderData } from "react-router-dom";

function InfoComponent(props) {
    const route = `https://buy.stripe.com/test_fZedRz2O0fNDa7mbII`;
    var bouttonAchat = <a href={route} className="btn w-50">Acheter</a>

    if(props.disponible == "non disponible")
    {
        bouttonAchat = <button className="btn w-50" disabled>Non disponible</button>
    }

    return <div className="container mt-4 mb-4 rounded p-2 shadow" id="detail">
    <div className="row">
        {/*IMAGE*/}
        <div className="col-6">
            <img src={props.image} className="card-img-top rounded"/>
        </div>

        {/*BODY*/}
        <div className="col-6">
            <h1>{props.titre}</h1>
            <hr/>
            <h3>Prix: {props.prix}$</h3>
            <h3>Restant: {props.restant}</h3>
            <hr/>
            <p>{props.description}</p>
            <hr/>
            {bouttonAchat}
        </div>
    </div>
</div>
}

export default InfoComponent;