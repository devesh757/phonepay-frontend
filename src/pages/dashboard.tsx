import Appbar from "../components/appbar"
import Users from "../components/users"
import Balance from "../components/balance"
import Logout from "../components/logout"


const Dashboard = ()=>{

return (
    <div  >
        <div className="h-screen" style={{backgroundImage:"url('https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg')"}}>
          <div>
             <div className="flex  justify-end"> <Logout /></div>
                <Appbar />
            </div>
            <div className="m-8">
                <Balance  balance={10000}/>
                <Users />
            </div>

  
        </div>
     </div>
)
}
export default Dashboard;