import {Link} from "react-router-dom";

export default function WarningButton({label,buttonText,to}: {label:string,buttonText:string,to:string}){
    return(
        <div className="flex justify-center text-lg py-2 ">
            < div className="px-2">
                {label}
            </div>
         <Link className="pointer underline pl-1" to={to} >{buttonText}</Link>
        </div>
    )
}