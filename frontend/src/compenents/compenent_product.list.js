import {useEffect,useState} from "react";
import {deleteProductByID,getAllProducts,getAllproducts} from "../services/product.services"
import { Link } from "react-router-dom";

export  function ProductList(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetchProducts();
    },[])
    async function fetchProducts(){
        const res=await getAllProducts()
        setProducts(res.data);
    }
    async function deleteProduct(id){
        const res=await deleteProductByID(id)
        fetchProducts();
    }
    return(
      <>
        <table className='etudiantTable'>
      <thead>
      <tr>
        <th>Nom</th>
        <th>Age</th>
      </tr>
      </thead>
      <tbody>
      {products.map((elem,index)=><tr key={index}>
        <td>{elem.name}</td>
        <td>{elem.price}</td>
        <td><button onClick={() => deleteProduct(elem._id)}>Delete</button></td>
        </tr>)}
      </tbody>
  </table>
  <Link to={"/products/new"}>Nouveau produit</Link>
  </>);
}
