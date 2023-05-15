import HeaderComponent from "./HeaderComponent";
import ProductCardComponent from "./ProductCardComponent";

function PagePrincipalComponent(props) {
    var page = <>
        <HeaderComponent/>
        <div className="row row-cols-1 row-cols-md-3 g-4" id="feed">
            <ProductCardComponent key='1' id='1' titre='T-Shirt Colle rond' description='pommier description'/>
            <ProductCardComponent key='1' id='1' titre='pomme' description='pommier description'/>
            <ProductCardComponent key='1' id='1' titre='pomme' description='pommier description'/>
            <ProductCardComponent key='1' id='1' titre='pomme' description='pommier description'/>
            <ProductCardComponent key='1' id='1' titre='pomme' description='pommier description'/>
            <ProductCardComponent key='1' id='1' titre='pomme' description='pommier description'/>
            <ProductCardComponent key='1' id='1' titre='pomme' description='pommier description'/>
            <ProductCardComponent key='1' id='1' titre='pomme' description='pommier description'/>
            <ProductCardComponent key='1' id='1' titre='pomme' description='pommier description'/>
        </div>
    </>

    return page;
}

export default PagePrincipalComponent;