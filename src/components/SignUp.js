import React from "react";

const style = {
  marginTop:40,
  marginLeft: 70,
}

const style2 = {
  color:"Blue",
  fontSize: 27,
  display:'block',
}

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('register');
    }
    return (
        <div style={style}>
          <label style={style2}>管理者メールアドレス</label>
          <input name="email" type="email" size='29'  placeholder="ex.)test@com"  style={{marginTop:15,marginLeft:21}}/>
        </div>
    )
};

export default SignUp;