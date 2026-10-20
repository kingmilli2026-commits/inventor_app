
import {useState, useContext} from 'react';
import { ProductContext } from '../context/ProductContext';
const Create = () => {
    const {products, setProducts} = useContext(ProductContext)
    const[name,setName] = useState("")  // used to track name input
    const[qty, setQty] = useState("")   // used to track product qty input

    function handleSubmit(event){
        event.preventDefault();
        let id = Date.now();
        // validate
        if(name=="" || qty ==""){
            alert("Oga enter product name and qty");
            return;
        }
        // collect the data into shape
        // using either fetch api send the data to the particular endpoint

        // since we dont have api we are communicating with, just update the product state so that
        // the react can render every components where product satte is used
        setProducts([...products, {name,quantity: qty,id}]);
        // clear your form inputs 
        setName("");
        setQty("");
    }

    return (
        <div className="create-content">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">GET STARTED</p>
                    <h2>Add a product</h2>
                </div>
                <span className="section-icon" aria-hidden="true">+</span>
            </div>
            <p className="section-description">Keep your inventory up to date by adding a new item.</p>
            <form className="product-form" onSubmit={handleSubmit}>
                <label className="field">
                    <span>Product name</span>
                    <input type="text" placeholder="e.g. Ceramic mug" value={name} onChange={function(event){setName(event.target.value)}} />
                </label>
                <label className="field">
                    <span>Quantity</span>
                    <input type="number" placeholder="e.g. 24" value={qty} onChange={function(event){setQty(event.target.value)}}/>
                </label>
                <button className="primary-button" type="submit">
                    <span aria-hidden="true">+</span> Add product
                </button>
            </form>
        </div>
    )
}
export default Create