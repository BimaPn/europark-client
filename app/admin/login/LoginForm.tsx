"use client"
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import InputLabel from "@/components/ui/InputLabel";
import TextInput from "@/components/ui/TextInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"

const LoginForm = ({className}:{className?:string}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const router = useRouter()
  const [error,setError] = useState<string | null>(null)

  const formSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn("credentials",{...formData,redirect:false})
      .then((callback) => {
      if(callback?.error) setError(callback.error);
      if(callback?.ok && !callback.error) {
        router.push("/admin/dashboard");
      }
    });
  }
  return (
    <form onSubmit={formSubmit} className={`w-[384px] rounded-lg bg-white  pt-4 pb-5 px-5 ${className}`}>
      <h1 className="mb-[12px] font-medium">Login</h1>
      <div className="flex flex-col gap-3">
        
        <div className="relative">  
          <TextInput 
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData,email:e.target.value})}
          required
          />
          <InputLabel forInput="email" value="Email"/>
        </div> 

        <div className="relative">  
          <TextInput 
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData,password:e.target.value})}
          required
          />
          <InputLabel forInput="password" value="Password"/>
        </div> 

      </div>  
      <ButtonPrimary type="submit" className="mt-6 text-[15px]">
        Login
      </ButtonPrimary>
    </form>
  )
}

export default LoginForm
