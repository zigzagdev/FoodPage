import React,{Fragment} from "react";

const pstyle = {
 display:'flex',
 justifyContent:'space-between',
 height: 100,
 backgroundColor: '#0033FF',
 textAlign: "right",
 minWidth:'1024px',
}

const style = {
 textAlign: "right",
 paddingRight: 100,
 lineHeight:3,
 fontSize: 30
}

const style2 = {
  textAlign: "left",
  fontSize: 30,
  paddingLeft: 100,
  lineHeight:3,

}


const Header = () => {
   return<Fragment>
           <div style={pstyle}>
             <div style={style2}>
               <label style={{color:"white"}}>Food Search</label>
             </div>
               <div style={style}>
                   <label style={{color:"white"}}>Test</label>
               </div>
           </div>
         </Fragment>;
}

export default Header;