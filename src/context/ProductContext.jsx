
import {createContext, useState} from "react"

// step1: create a context
export const ProductContext = createContext();

// step2: create a provider for ProductContext: it will provide the product state

export const ProductsProvider = ({children}) => {

    //fetch the list of products from local storage, if true convert it from json if nmo product
    // is there

        const productsList = localStorage.getItem("products") ? JSON.parse(localStorage.getItem
        ("products")) : [];

    const[products, setProducts] = useState(productsList);

    return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export const ThemeContext = createContext("light");
