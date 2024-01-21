import {InputHTMLAttributes} from 'react'

const TextInput = ({className,...props}:InputHTMLAttributes<HTMLInputElement> & {className ?:string}) => {
  return (
    <input
    placeholder=' '
    className={`w-full block bg-transparent border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-primary peer ${className}`} 
    {...props}/>
  )
}

export default TextInput

