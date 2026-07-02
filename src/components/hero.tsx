 import {useLocation} from "react-router-dom"
export default function Herox(){
const location = useLocation();

const hiddenpaths = ["/dashboard","/send","/signup","/signin"];

if(hiddenpaths.includes(location.pathname)){
    return null;
}

    return(
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <img  className="w-32 sm:w-40 object-contain" src={"https://assetscdn1.paytm.com/images/catalog/view/342367/1725447383123.png"}></img>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Pay anyone directly from your bank account 
                </h1>
                <h3 className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed">
                    Pay anyone eveywhere.Make conactless & secure payments in-stores or online using Paytm UPI 
                    or Directly  from your Bank Account.Plus,send & receive money from anyone.
                </h3>
                
                <div className="flex items-center gap-3 pt-4 ">

             <img  className="  w-32 sm:w-40 h-auto cursor-pointer object-contain" src={"https://assetscdn1.paytm.com/images/catalog/view_item/2834703/1725432129171.png"}></img>
             </div>
             <div className="ml-2">
             <img  className=" w-32 sm:w-40 h-auto cursor-pointer object-contain" src={"https://assetscdn1.paytm.com/images/catalog/view_item/2834704/1725432148873.png"}></img>
             </div>
             </div>

        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img  className ="w-full max-w-md md:max-w-xl h-uto object-contain" src={"https://assetscdn1.paytm.com/images/catalog/view/1752741641420.png"}></img>
        </div>
        </div>
        
    )
 }