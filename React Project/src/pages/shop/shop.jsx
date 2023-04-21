import React from "react";
import{PRODUCTS} from "../../product";
import {Product} from "./product"
import './shop.css';
import { Footer } from "../../Component/footer";


 export const Shop =() => {
    return <div className="shop">
        <div className="shopTitle">
            <h1>Music Album CD Shop</h1>

        </div>
        <div className="products">{PRODUCTS.map((product) =>(
         <Product data={product} />
         ))}
         
        </div>
        <Footer/>
    </div>
 };