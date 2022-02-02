import React from 'react';

const Header = () => {
    return(
        <div style={{height:"50px", width:"100%", backgroundColor:"black", color:"white", marginTop:"150px", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <div style={{width: "550px", display:"flex", justifyContent:"space-around"}}>
                <a href='#' style={{color:"white", textDecoration:"none"}}>Home</a>
                <a href='#' style={{color:"white", textDecoration:"none"}}>About</a>
                <a href='#' style={{color:"white", textDecoration:"none"}}>Best Deals</a>
                <a href='#' style={{color:"white", textDecoration:"none"}}>Tools</a>
                <a href='#' style={{color:"white", textDecoration:"none"}}>Contact</a>
            </div>
        </div>
    )
}
export default Header