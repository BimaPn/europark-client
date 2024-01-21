
const ActiveBadge = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className="w-fit mx-auto text-xs text-blue-600 font-medium px-2 py-1 rounded-md bg-blue-100">
      {children ? children : "Active"}
    </div>
  )
}

export default ActiveBadge
