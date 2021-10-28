import React from "react";

const style = {
 height: 100,
 backgroundColor: '#0033FF',
 textAlign: "right",
 minWidth:'1024px',
 paddingRight: 100,
 lineHeight:3,
 fontSize: 30
}

const Header = () => {
   return <div style={style}>
           <label style={{color:"white"}}>Food Search</label>
          </div>;
}

export default Header;