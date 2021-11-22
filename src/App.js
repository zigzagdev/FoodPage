import SignUp from "./components/SignUp";
import Header from "./components/Header";
import {AuthProvider} from "./components/authcontext";
import {Router, BrowserRouter, Link,Route} from "react-router-dom";
import Footer from "./components/Footer";
import Display from "./components/Display";


function App() {
  return (
      <AuthProvider>
          <Header/>
          <BrowserRouter>
            <Route path="/SignUp" component={SignUp}/>
            <Route path ='/' component={Display}/>
          </BrowserRouter>
        <Footer/>
      </AuthProvider>

  )
}
export default App;
