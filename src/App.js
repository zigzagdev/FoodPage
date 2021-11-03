import SignUp from "./components/SignUp";
import Header from "./components/Header";
// import Display from "./components/Display";
import {AuthProvider} from "./components/authcontext";
import {Route,BrowserRouter} from "react-router-dom";


function App() {
  return (
      <AuthProvider>
        <div>
          <Header/>
          <BrowserRouter>
          　　<Route path="/SignUp" component={SignUp}/>
             {/*<Route path="/Display" component={Display}/>*/}
          </BrowserRouter>
        </div>
      </AuthProvider>
  )
}
export default App;
