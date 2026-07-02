
import background from "./assets/background.png"
export default function Background(){
  return (
<div className="w-full h-64 md:h-300 md:w-500 overflow-hidden">
  <img 
    src={background} 
    alt="payment app" 
    className="w-full h-full object-cover object-center"
  />
</div>
  )
}