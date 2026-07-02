import Button from "../components/button"
import Input from "../components/input"
import Headers from "../components/headers"
import SubHeader from "../components/subheaders"
import WarningButton from "../components/bottomwarning"
// import signupbg from "../components/signupbg"
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from  "axios"
const VITE_API_URL = import.meta.env.VITE_API_URL ;

interface AxiosErrorResponse {
  message?: string;
}


const Signup = () =>{
      const [firstname,setFirstname] = useState("");
        const[lastname,setLastname] = useState("");
        const[username,setUsername] = useState("")
        const[password,setPassword] = useState("")
        const navigate = useNavigate();
      
    return (
        <div style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQAveT8nVR6bXwzw9ACitkix1cVNKOu1mXg&s')"}}>
        <div className="flex  h-screen justify-center items-center">
  <div className="flex flex-col justify-center">
    <div className="rounded-lg  w-80 text-center p-2 h-max px-4">
        <Headers Label={" Sign up"} />
        <SubHeader Label={" Enter your Information to create an account"} />
        <Input onChange={(e) => {
            setFirstname(e.target.value);
            }}
            placeholder="Enter your first name" Label={"First Name"}/>
            <Input onChange={(e) => {
                setLastname(e.target.value);
            }} placeholder="Enter your last name" Label={"Last Name"}/>
            <Input onChange={(e)=> {
                setUsername(e.target.value)
            }} placeholder="Enter your Username" Label={"Username"}/>
            <Input onChange={(e)=>{
                setPassword(e.target.value)
            }} placeholder="Enter your password" type="password" Label={"Password"}/>

        <div className="pt-4">
            <Button Label={"Sign Up"} onClick={async()=>{
                try{
                 const response = await axios.post(`${VITE_API_URL}/api/v1/user/signup`,{
                    username,
                    password,
                    firstname,
                    lastname
                 })
                 if(response.data.token){
                 localStorage.setItem("token",response.data.token)
                 }
                 navigate("/dashboard")
                 } catch (error) {
    console.error("Full Signup Error Object:", error);
    if (axios.isAxiosError(error) && error.response?.data) {
                      const data = error.response.data as AxiosErrorResponse;
                      console.log("SERVER ERROR DETAIL:", data);
                      alert("Signup failed: " + (data.message || JSON.stringify(data)));
    } else {
        alert("An error occurred during signup.");
    }
}
            }}/>
            </div>
            <WarningButton label={"Already have an account"}
             buttonText={"sign in"} to={"/signin"} />
        </div>
    </div>
  </div>
    </div>
    )
}
export default Signup;