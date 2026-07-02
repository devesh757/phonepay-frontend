 import {useNavigate} from "react-router-dom"

export default function Appbar(){
    const navigate = useNavigate();
    return(
        <div className="flex justify-between items-center w-full rounded-md mt-4  ">
            <div className="flex w-full items-center ml-2 justify-between  shadow-lg border-gray-400
            h-full text-2xl text-blue-400 font-bold px-4 py-5">
                <img  src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo_new.svg"></img>
                    <div className="flex h-full text-2xl font-bold justify-center items-center">
                        <button onClick={()=>
                            navigate("/signup")
                        } > 
                        <img className="w-12 "src={"https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg"}></img>
                        </button>
                    </div>
                </div>   
                </div>

    )
}