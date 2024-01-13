"use client"
import { ButtonHTMLAttributes } from "react"
import { FaEye } from "react-icons/fa"

const ButtonDetail = ({className,callback,...props}:ButtonHTMLAttributes<HTMLButtonElement> & {callback:()=>void,className?:string}) => {
  const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    callback();
  }
  return (
    <button
    onClick={onClick}
    {...props}
    className="w-8 aspect-square rounded-lg bg-blue-100 text-blue-600 flexCenter">
      <FaEye className="text-[18px]"/>
    </button> 
  )
}

export default ButtonDetail
