import React from "react";
import{ Link} from "react-router-dom";
import "./footer.css"



export const  Footer=() =>{
    return(
         <div className="footer">
            <div className="Address"><b>Address</b>
            <p>Indrayani Colony,</p>
                 <p> Gagan Road,</p>
                <p>  Mumbai 
                india</p>
            <Link to="/Address">
               </Link>
            </div>
           <div className="social">
            <div className="link"> Social Media Link
           <Link to="/social">   
           <p path="/">Instagram</p>
           <p path="/">Facefook</p>
           <p path="/">Twitter</p>
           </Link></div>
           </div>
                {/* <li><a href="home.html" class="link-container">Home</a></li>  
            <li><a href="About.html" class="link-container">About us</a></li>  
          <li><a href="product.html" class="link-container"> product</a></li>
          <li><a href="Contact.html" class="link-container">Contact Us</a></li>
          </ul>
          </td>
        <td>
          <img src="./images/Facebook.webp" width="20px" height="20px"> 
       <a href="#" class="link-container">Facebook</a><br>
      <img src="./images/twtr.png" width="35px" height="20px"> 
      <a href="#" class="link-container">Twitter</a><br>
        <img src="./images/Instagram.png" width="20px" height="20px">
         <a href="#" class="link-container">Instagram</a><br> */}
        </div>
    );
};