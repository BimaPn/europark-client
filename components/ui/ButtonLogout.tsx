import ApiClient from "@/app/api/axios/ApiClient"
import axios from "axios"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ButtonHTMLAttributes } from "react"

const ButtonLogout = ({className,children,...props}:ButtonHTMLAttributes<HTMLButtonElement> & {children:React.ReactNode,className?:string}) => {
  const router = useRouter()
  const logout = (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      ApiClient.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/auth/logout`)  
      .then(() => {
          signOut({redirect:false}).then(() => {router.push('/admin/login')})
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
  }
  return (
     <button 
     className={`w-fit text-[15px] ${className}`}
     onClick={logout}
      {...props}
      >{children}</button>
  )
}

export default ButtonLogout 
