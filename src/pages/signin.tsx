import Button from "../components/button";
import Input from "../components/input";
import Headers from "../components/headers"
import SubHeader from  "../components/subheaders"
import axios from "axios"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import WarningButton from "../components/bottomwarning" 
const VITE_API_URL = import.meta.env.VITE_API_URL;

const Signin = () =>{
     const [username,setUsername] = useState("");
     const [password,setPassword] = useState("");
     const navigate = useNavigate();
    return(
        <div style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQAveT8nVR6bXwzw9ACitkix1cVNKOu1mXg&s')"}}>
        <div className="flex justify-center h-screen items-center">
            
            <div className="rounded-lg  w-80   text-center p-2 h-max px-4">
                <Headers Label={"Sign In"} />
                <SubHeader Label={"Enter your credentials to access your account"}/>
                <Input onChange={(e) => {
                    setUsername(e.target.value)
                }} placeholder="Enter your UserName" Label={"Username"} />
              <Input onChange={(e) => {
                setPassword(e.target.value)
              }} placeholder="Enter your Password" Label={"Password"} />
              <div className="pt-4">
                <Button Label={"Sign in"} 
                onClick={async() =>{
                const response = await axios.post(`${VITE_API_URL}/api/v1/user/signin`,{
                    username,
                    password
                })
                localStorage.setItem("token",response.data.token)
                navigate("/dashboard")
                }}/>
              </div>
              <div>
                <WarningButton label={"Dont have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
              </div>

            </div>
</div>
        </div>
    )
}
export default Signin;