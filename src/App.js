import SignUp from "./components/SignUp";
import Header from "./components/Header";
import {AuthProvider} from "./components/authcontext";


function App() {
  return (
      <AuthProvider>
        <div>
          <Header/>
          <SignUp/>
        </div>
      </AuthProvider>
  )
}
export default App;
