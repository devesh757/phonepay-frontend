export default function Balance({balance}:{balance: number}){
    return(
        <div>
            <div className="text-2xl text-white font-medium mt-10 text-left px-2
            text-left items-start">
                Balance in (Rs) {balance}
            </div>
        </div>
    )
}