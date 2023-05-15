import HeaderComponent from "./HeaderComponent";
import InfoComponent from "./InfoComponent";
import { useLoaderData } from "react-router-dom";

function PageProduitComponent(props) {
    const {id} = useLoaderData();
    const {nom} = useLoaderData();
    const {description} = useLoaderData();
    const {prix} = useLoaderData();
    const {disponible} = useLoaderData();
    const {image} = useLoaderData();
    const {nbInventaire} = useLoaderData();


    var page = <>
        <HeaderComponent/>
        <InfoComponent id={id} titre={nom} prix={prix} disponible={disponible} restant={nbInventaire} image={image} description={description}/>
    </>

    return page;
}

export default PageProduitComponent;