import HeaderComponent from "./HeaderComponent";
import ProductCardComponent from "./ProductCardComponent";
import ProductListComponent from "./ProductListComponent";

function PagePrincipalComponent(props) {
    var page = <>
        <HeaderComponent/>
        <ProductListComponent/>
    </>

    return page;
}

export default PagePrincipalComponent;