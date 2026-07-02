export default function Button({onClick,Label} : {onClick:() => void ,Label:string}){
    return (
        <div className="flex flex-col justify-center items-center py-2 px-2 rounded-md">
           <button   onClick={onClick} type="button" className="text-white border-2 
           hover:bg-blue-600  focus:outline-none focus:ring-blue-300 bg-blue-300
           font-medium rounded-lg text-sm px-2 py-2 text-center dark:border-blue-300 
             px-12 w-full text-2xl">
            {Label}
           </button>
        </div>
    )
}