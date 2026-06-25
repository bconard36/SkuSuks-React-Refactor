/**
 * Shopify Client API Constructor
 */

import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const ShopifyClient = createStorefrontApiClient({
    storeDomain: process.env.REACT_APP_STORE_DOMAIN, // Shopify Domain
    apiVersion: "2025-01", // Hardcoded
    publicAccessToken: process.env.REACT_APP_STOREFRONT_API // Storefront API
});

export default ShopifyClient;