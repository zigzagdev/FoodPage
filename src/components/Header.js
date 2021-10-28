import React from "react";

const style = {
 height: 100,
 backgroundColor: 'azure',
 textAlign: "right",
 minWidth:'1024px',
 paddingRight: 100,
 lineHeight:3,
 fontSize: 30
}

const Header = () => {
   return <div style={style}>
            Food Search
          </div>;
}

export default Header;