
const ExpiredBadge = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className="w-fit mx-auto text-xs text-white font-medium px-[6px] py-1 rounded-md bg-blue-400">
      {children ? children : "Expired"}
    </div>
  )
}

export default ExpiredBadge
