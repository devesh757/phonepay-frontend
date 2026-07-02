import Signup from "./pages/signup"
import Signin from "./pages/signin"
import Dashboard from "./pages/dashboard"
import SendMoney from "./pages/sendmoney"
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom"
import './App.css'




export default function App(){
  return(
   <div>
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/signup"/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/send" element={<SendMoney />}/>
    </Routes>
    </Router>
    </div>
  
  


  )
}