import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom";
import Input from "./input"
import  Button from "./button"
import axios from "axios"
const VITE_API_URL = import.meta.env.VITE_API_URL;

interface UserType {
  _id: string;
  firstname: string ;
  lastname: string;
}

 const Users = () => {
    const [users,setUsers] =  useState<UserType[]>([]);
    const [filter,setFilter ] = useState<string>("");

    useEffect(() => {
       axios.get<{user: UserType[]}>(`${VITE_API_URL}/api/v1/user/bulk?filter=` + filter)
       .then(response => {
        setUsers(response.data.user || []);
       })
       .catch(err =>{
        console.error("user route error: ",err); 
       })
    }, [filter])

return <>
<div className=" text-white font-bold mt-6 text-lg">
    Users
</div>
<div className="my-2">
    <Input onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }} type="text" placeholder="Search users..." className="text-white-400 font-bold  w-full px-2 py-1"></Input>
</div>
<div>
    {users?.map((user: UserType) =>(
 <User key={user._id} user={user} />))}
</div>
</>
}

function User({user}:{user:UserType}){
    const navigate = useNavigate();
     const firstname = user?.firstname || "";
    const lastname = user?.lastname || "";
    const initial = firstname.length > 0 ? firstname[0].toUpperCase() : "?";

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex  flex-col justify-center h-full text-xl">
                    {initial}
                </div>
            </div>
            <div className="flex text-white flex-col justify-center h-full">
                <div>
                    {firstname.toUpperCase()} {lastname.toUpperCase()}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <Button onClick={() => {
                navigate("/send?id=" + user._id + "&name=" + firstname);
            }}Label={"Send Money"} />
        </div>
    </div>
}
export default Users;