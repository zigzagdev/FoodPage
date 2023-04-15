import React, {Fragment} from "react";


const style = {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
}
const font = {
    color: "white",
    textAlign: "right",
    marginRight: 40,
    marginTop: 30,

}


const Footer = () => {
    return <Fragment>
        <div style={style}>
            <div style={font}>
                Matthew - Masa
            </div>
        </div>
    </Fragment>
}

export default Footer;