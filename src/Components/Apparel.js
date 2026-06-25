/**
 * Apparel component 
 * Loads json product components using a custom hook (useFetch) 
 */
import Products from "./Products";
// import useProductList from "./useShopifyProducts";
import useFetch from "../Hooks/useFetch";

const Apparel = () => {

    // const { error, isLoading, data: products } = useProductList("apparel", 5)
    const { error, isLoading, data: products } = useFetch("http://localhost:8000/products");

    // Product Card can be a reusable component since both apparel and accessory pages use 

    return ( 
        <div>
            <div className="header-container">
                <h3 className="page-header">APPAREL</h3>
            </div>
            { error && <div>{error}</div> }
            { isLoading && <div>Loading...</div> }
            { !isLoading && Array.isArray(products) && (
                <Products products={products} />
            )}
        </div>
     );
}
 
export default Apparel;