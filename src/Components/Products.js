/**
 * Product component for SkuSuks apparel and accessory pages 
 * Renders product cards for each product 
 */

import ProductCard from "./ProductCard";

const Products = ({ products = []}) => {

    // Products maps over the products array and renders one ProductCard per item. 
    // Refactor ProductCard to live in its own file. Currently:
    // ProductCard lives within this map() - each group of img, h3, p, and button make up the ProductCard
    return ( 
        <div>
            <div className="product-container">
                {products.map(product => (
                        <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
        
     );
}
 
export default Products;