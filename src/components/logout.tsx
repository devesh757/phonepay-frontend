import Button from "./button";
import { useNavigate} from "react-router-dom";

export default function Logout(){
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center text-white">
             <Button Label="Logout" onClick={()=> {
                localStorage.removeItem("token");
                navigate("/")
             }} />
        </div>
    )
}
