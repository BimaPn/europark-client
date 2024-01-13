
const ActiveBadge = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className="w-fit mx-auto text-xs text-yellow-800 font-medium px-2 py-1 rounded-md bg-yellow-200/95">
      {children ? children : "Active"}
    </div>
  )
}

export default ActiveBadge
