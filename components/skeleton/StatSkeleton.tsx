import Skeleton from "./Skeleton"

const StatSkeleton = ({className, count=1}:{className?:string, count?:number}) => {
  return Array(count).fill(0).map((_,index) => (
    <div key={index} className={`bg-white flex flex-col gap-[13px] px-3 py-3 rounded-lg ${className}`}>
      <Skeleton className="w-[30%] size-lg" />
      <Skeleton className="w-[70%] size-sm" />
    </div>  
    )
  )
}
export default StatSkeleton
