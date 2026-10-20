import {useContext} from "react";
import {ProductContext} from "../context/ProductContext"


const Products = () => {
    const {products,setProducts} = useContext(ProductContext)
    function handleDelete(id) {
        setProducts((currentProducts) =>
            currentProducts.filter((product) => product.id !== id)
        );
    }

    return (
        <div className="inventory-content">
            <div className="section-heading inventory-heading">
                <div>
                    <p className="eyebrow">OVERVIEW</p>
                    <h2>Product inventory</h2>
                </div>
                <span className="inventory-total">{products.length} total</span>
            </div>
            <div className="table-scroll">
                <table className="inventory-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"><span className="visually-hidden">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td className="row-number">{String(index + 1).padStart(2, "0")}</td>
                                <td className="product-name">{product.name}</td>
                                <td><span className="quantity-badge">{product.quantity} in stock</span></td>
                                <td className="action-cell">
                                    <button className="delete-button" type="button" onClick={() => handleDelete(product.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr>
                                <td className="empty-state" colSpan="4">
                                    <span className="empty-icon" aria-hidden="true">↗</span>
                                    <strong>Your inventory is empty</strong>
                                    <span>Add your first product using the form above.</span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Products