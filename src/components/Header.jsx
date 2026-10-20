
// header components needs app products and it does nit want it via prop drilling it will consume it from products context
// import the context
import {ProductContext} from "../context/ProductContext"
// import the hook: useContext()
import {useContext, useEffect} from "react"
// destructure want you want to use from inside the context

const Header = () => {
   
    const {products} = useContext(ProductContext) // pulling out products from the context
// anytime products stage changes (a product is added or deleted) we want to store it inside local storage
     useEffect(
        function(){
            localStorage.setItem("products", JSON.stringify(products))
        }, [products]
     )
    
    return (
        <header className="site-header">
            <div className="brand-lockup">
                <span className="brand-mark" aria-hidden="true">I</span>
                <div>
                    <p className="eyebrow">YOUR STOCK, IN SYNC</p>
                    <h1>Invento <span className="bg-amber-300 text-white rounded-2xl">APP </span></h1>
                </div>
            </div>
            <div className="stock-count" aria-label={`${products.length} products in inventory`}>
                <span className="count-dot" aria-hidden="true" />
                <span>{products.length} {products.length === 1 ? "product" : "products"}</span>
            </div>
        </header>
    )
}
export default Header