import {useLocation}  from "react-router-dom"
import Appbar from "./appbar"

export default function Navigation(){
const location = useLocation();

const hiddenpaths = ["/dashboard","/send","/signin","/signup"];

if(hiddenpaths.includes(location.pathname)){
    return null;
}


    return(
        <div >
        <Appbar />
        </div>
    )
}