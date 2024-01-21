import LoginForm from "./LoginForm"

const page = () => {
  return (
    <section className={`h-screen flexCenter relative`}>
      <div className={`w-full h-full bg-[url('/images/login.jpg')] bg-no-repeat bg-center bg-cover brightness-[.35]`}/>
      <LoginForm className="absolute"/>
    </section>
  )
}


export default page
