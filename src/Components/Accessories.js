/**
 * Accessories component 
 * Loads json product components using a custom hook (useFetch) 
 */
import Products from "./Products";
// import useProductList from "./useShopifyProducts";
import useFetch from "../Hooks/useFetch";
// import ProductCard from "./ProductCard";

const Accessories = () => {

    // const { error, isLoading, data: products } = useProductList("accessories", 5);
    const { error, isLoading, data: products } = useFetch("http://localhost:8000/accessories");

    // Product Card can be a reusable component since both apparel and accessory pages use 

    return ( 
        <div>
            <div className="header-container">
                <h3 className="page-header">ACCESSORIES</h3>
            </div>
            { error && <div>{error}</div> }
            { isLoading && <div>Loading...</div> }
            { !isLoading && Array.isArray(products) && (
                <Products products={products} />
            )}
        </div>
     );
}
 
export default Accessories;