import {useSearchParams} from "react-router-dom";
import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const VITE_API_URL = import.meta.env.VITE_API_URL;

const SendMoney = () =>{
    const navigate = useNavigate();
    const[searchParams] = useSearchParams();
    const to = searchParams.get("id");
    const name = searchParams.get("name") ?? "User";
    const[amount,setAmount] = useState(0);

    const firstInitial = name.length > 0 ? name[0].toUpperCase() : "?";

    return(
        
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center" >
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 
                w-96 bg-white shadow-lg rounded-lg">
<div className="flex flex-col space-y-1.5 p-6">
    <h2 className="text-3xl font-bold text-center">Send Money</h2>
</div>
<div className="p-6">
    <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-xl text-white">{firstInitial}</span>
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
    </div>
    <div className="space-y-4">
        <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled
            :opacity-70" htmlFor="amount">
                Amount (in Rs)
            </label>
            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                setAmount(Number(e.target.value));
            }} type="number" className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm"
            id="amount"
            placeholder="Enter amount" />
        </div>
        <button onClick={async()=> {
            const token = localStorage.getItem("token");
    if (!token || token === "undefined" || token === "null") {
        alert("You are not logged in or your session has expired. Please log in again.");
        navigate("/signin"); 
        return;
    }

             if (amount <= 0) {
            alert("Please enter an amount greater than 0.");
            return;
        }

        if (!to || to === "null" || to === "undefined") {
            alert("Recipient identifier is missing. Please go back and select a user again.");
            return;
        }


        console.log("Sending payload:", { to: to, amount: amount });
        console.log("Token sent:", localStorage.getItem("token"));
            try{
          await axios.post(`${VITE_API_URL}+/api/v1/user/transfer`,{
            to:to,
            amount:amount
          },{
            headers:{
                'Authorization':"Bearer " + localStorage.getItem("token")
            }
          })
          alert(`${amount} Rs sent to ${name}`);
        } catch(error) {
            console.error("Transfer failed",error);
            alert("Transfer failed.please check your balance.");
        }
        }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors
        h-10 px-4 py-2 w-full bg-green-500 text-white">
            Intiate Transfer
        </button>
    </div>
</div>
              </div>
            </div>

        </div>
    )
}
export default SendMoney;