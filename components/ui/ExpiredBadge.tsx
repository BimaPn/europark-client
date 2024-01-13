
const ExpiredBadge = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className="w-fit mx-auto text-xs text-white font-medium px-2 py-1 rounded-md bg-red-400/95">
      {children ? children : "Expired"}
    </div>
  )
}

export default ExpiredBadge
