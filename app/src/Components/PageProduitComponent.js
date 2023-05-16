import HeaderComponent from "./HeaderComponent";
import InfoComponent from "./InfoComponent";
import { useLoaderData } from "react-router-dom";

function PageProduitComponent(props) {
    const {id} = useLoaderData();
    const {nom} = useLoaderData();
    const {details} = useLoaderData();
    const {prix} = useLoaderData();
    const {disponible} = useLoaderData();
    const {imageSrc} = useLoaderData();
    const {stock} = useLoaderData();


    var page = <>
        <HeaderComponent/>
        <InfoComponent id={id} titre={nom} prix={prix} disponible={disponible} restant={stock} image={imageSrc} description={details}/>
    </>

    return page;
}

export default PageProduitComponent;