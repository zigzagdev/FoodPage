import SignUp from "./components/SignUp";
import Header from "./components/Header";
import {AuthProvider} from "./components/authcontext";
import {Route,BrowserRouter} from "react-router-dom";


function App() {
  return (
      <AuthProvider>
        <div>
          <Header/>
          <BrowserRouter>
          　　<Route path="/SignUp" component={SignUp}/>
          </BrowserRouter>
          <Footer/>
        </div>
      </AuthProvider>
  )
}
export default App;
