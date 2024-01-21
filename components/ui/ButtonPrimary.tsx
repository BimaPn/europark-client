import { ButtonHTMLAttributes } from "react"

const ButtonPrimary = ({className,children,...props}:ButtonHTMLAttributes<HTMLButtonElement> & {children:React.ReactNode,className?:string}) => {
  return (
     <button 
     className={`w-full px-6 py-[7px] mt-4 rounded-md bg-primary mx-auto disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      {...props}
      >{children}</button>
  )
}

export default ButtonPrimary
