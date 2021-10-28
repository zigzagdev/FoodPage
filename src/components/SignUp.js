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
      <form onSubmit={handleSubmit}>
        <div style={style}>
          <label style={style2}>管理者メールアドレス</label>
          <input name="email" type="email" size='29'  placeholder="ex.)test@com"  style={{marginTop:15,marginLeft:7}}/>
        </div>
        <div style={style}>
            <label style={style2}>管理者パスワード</label>
          <input name="password" type="password" size='29' style={{marginTop:15,marginLeft:7}}/> <label style={{fontSize:15,color:'#FF77FF'}}>※英数字8文字以上でお願いします。</label>
        </div>
        <div>
          <button style={{color:"#222222",marginLeft:76,marginTop:29}}>Register</button>
        </div>
      </form>
    );
};

export default SignUp;