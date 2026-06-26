# SkuSuks React Refactor 
This project is a React refactor of the original SkuSuks e-commerce application. Originally designed as a multi-page 
website, this application has evolved into a Shopify storefront template where client's credentials will be added and saved in a private .env file. 
This project was bootstrapped with Create React App. Reusable React components replace the static HTML structure, state management manipulates the DOM, 
and a mobile-first design was implemented. 

# Folder List 
- public: houses all public files to be served 
        - images: houses all relevant background, logo, product, and cycler images for all components
        - index.html: parent HTML structure - connecting point for Root component
        - manifest.json: stock base file from Create React App 
        - robots.txt: stock .txt file from Create React App
- src: parent folder for components, stylesheets, and hooks
    - Components: parent folder for all components (excluding Shopify specific and Root)
        - Accessories.js: renders the Accessory component. 
            - _Currently loads data from a JSON data file, waiting for Shopify credentials to update_
        - App.js: parent component. Handles routes for all components within the application.  
        - Apparel.js: renders the Accessory component
            - _Currently loads data from a JSON data file, waiting for Shopify credentials to update_
        - Contact.js: renders the contact form, utilizing state management for form inputs
        - Donate.js: renders the donate radio form, utilizing state management and onChange methodology
        - Footer.js: reusable footer component across all pages 
        - Home.js: renders the home page of the application, with a nested image cycler 
        - ImageCycler.js: reusable component to render a collection of images the user can cycle through 
        - Mission.js: mission statement component on the home page  
        - NavMenu.js: reusable nav bar and menu component across all pages  
        - NewDrops.js: renders the new drops component, with a nested image cycler 
        - PreOrder.js: renders the pre order component, with a nested image cycler
        - ProductCard.js: renders a single product card to be displayed
        - Products.js: reusable component for the apparel and accessory pages. Maps through an array of ProductCard components
        - RadioButton.js: reusable component for radio buttons, nested in the donate component
    - data: parent folder for JSON data used for testing 
        - db.json: A collection of JSON objects used to test component rendering 
    - Hooks: parent folder for custom, reusable hooks 
        - useClickOutside.js: targets specific click events to close/hide elements 
        - useFetch.js: fetches data from a resource via a url parameter 
            - used to fetch JSON test data 
    - Shopify: parent folder for Shopify Storefront API 
        - ShopifyClient.js: constructor for the Shopify client
            - Uses .env variables for domain, version, and token values 
        - useShopifyProducts.js: custom query and hook to gather product data from Shopify 
    - Styles: houses the stylesheets for the program 
            - contact.css: styles for the contact form page 
            - imageCycler.css: style rules for image cycler component 
            - index.css: base style rules for component and page structure
            - navbar.css: stylesheet specifically for the navbar component
            - pages.css: style rules for all pages/components (i.e. Donate, Apparel, Accessories, etc.) 
            - textStyles.css: style rules for formatting text elements 
    - App.test.js: stock test file from Create React App
    - index.js: Renders the app - acts as the connecting point between the app and the browser 
    - setupTests.js: stock test file from Create React App
- .gitignore: A list of files intentionally ignored by Git 
- package.json: Defines the project dependencies and scripts necessary for program execution
- package-lock.json: Locks project dependency versions for consistent installations 

# How To Run 
- _To view the productio build_:
    - https://sku-suks-react-refactor.vercel.app/

- _To launch via VS Code_:
    - Open the root folder in VS Code (or preferred code editor) 
        - SkuSuks-React-Refactor 
    - Open two (2) terminal windows (CTRL + `)
        - In the first terminal window, run the following commands: 
            - _To install the necessary dependencies_: npm install 
            - _To start the JSON server to retrieve data: npx json-server --watch data/db.json --port 8000     
        - In the second terminal window, run the following command: 
            - _To start the application_: npm run start 
    - If not automatically redirected, open a browser of your choice and navigate to: 
        - http://localhost:3000

# When Running
- Once a browser window is opened with the above URL, the SkuSuks (HSW) Page will appear. 
- This application features client-side input validation, menu toggles, real-time input reading, and the rendering of dynamic React components. 

# Known Limitations 
- Shopify credentials from the client are pending. Once received, JSON data will be replaced with dynamic Shopify collection queries. 
- Contact form will integrate email functionality using EmailJS
- One final styling pass based on client feedback 

# Tools Used 
- VS Code 
- GitHub
- NPM
- React
- Shopify Storefront API
- Vercel 