/**
 * Custom Query and Hook to Gather Product Data from Shopify
 */

import { useEffect, useState } from "react";
import ShopifyClient from "../ShopifyClient";

const getCollectionProductsQuery = `
    query getCollectionProducts($handle: String!, $first: Int!) {
        collectionByHandle(handle: $handle) {
            id
            title
            products(first: $first) {
                edges {
                    node {
                        id,
                        title,
                        handle,
                        featuredImage {
                            url
                            altText
                        },
                        variants(first: 1) {
                            edges {
                                node {
                                    id
                                    title
                                    price {
                                        amount
                                        currencyCode
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
/**
 * Fetches shopify data, maps through it, and returns clean objects
 * @param {String} handle category of product to fetch 
 * @param {Number} first number of items to fetch 
 * @returns 
 */
const useProductList = (handle, first) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!handle) return;


        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const { data, errors } = await ShopifyClient.request(
                    getCollectionProductsQuery,
                    {
                        variables: {
                            handle, 
                            first
                        },
                    }
                );

                if (errors) {
                    setError(errors);
                    setLoading(false);
                    return;
                }


                const formattedProducts = 
                    data.collectionByHandle.products.edges.map(({ node }) => ({
                        id: node.id,
                        title: node.title,
                        handle: node.handle,
                        image: node.featuredImage?.url,
                        alt: node.featuredImage?.altText,
                        price: node.variants?.edges?.[0]?.node?.price,
                }));

                setProducts(formattedProducts);
    
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [handle, first]);

    return { 
        data: products, 
        isLoading: loading, 
        error
    }
};

export default useProductList;


