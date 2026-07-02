
import type { ChangeEvent } from 'react';



interface InputProps {
  Label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input = ({ Label, type = "text", placeholder, className, onChange, value }: InputProps) => {
  return (
  <div>
    <div className="text-xl font-bold py-2 px-2 bg-blue-200 border-rounded" >
      {Label}
      <input 
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
          className={`w-full px-2 py-1 rounded ${className}`}
      />
      </div>
      </div>
  )
}

export default Input;
