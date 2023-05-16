import Product from "./product";
import { useLoaderData} from 'react-router-dom';
import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";
import { redirect } from "react-router-dom";

function AdminPage(props) {
    const { results } = useLoaderData();


    return (
        <div className="row bodyChanges">
            {results?.map(product =>
                <Product
                    key={product.id}
                    nom={product.nom}
                    details={product.details}
                    productId={product.id}
                    imageSrc={product.imageSrc}
                    prix={product.prix}
                    stock={product.stock}
                />
            )}
        </div>
    );
}

export default AdminPage;
