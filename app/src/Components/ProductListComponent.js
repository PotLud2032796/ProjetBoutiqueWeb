import { json } from "react-router-dom";
import React from 'react';
import ProductCardComponent from "./ProductCardComponent";


function ProductListComponent(props) {
    let [blogFeed,setBlogFeed] = React.useState([]);
    let containerBlog = <p>oops</p>;

    React.useEffect(() => {
        //RECUPERATION DES DONNES
        fetch(`http://localhost:3000/produits`)
        .then(reponse => reponse.json())
        .then(json =>{
            const cards = json.map((element) => (
                <ProductCardComponent
                  key={element.id}
                  id={element.id}
                  nom={element.nom}
                  prix={element.prix}
                  image = {element.image}
                  disponible = {element.disponible}
                />
            ));
            setBlogFeed(cards);
        });
    },[]);

    //CONTAINER
    containerBlog = <div className="row row-cols-1 row-cols-md-3 g-4" id="feed">{blogFeed}</div>

    //RETURN LE TABLEAU
    return containerBlog;
}

export default ProductListComponent;