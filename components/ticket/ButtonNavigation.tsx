"use client"
import { useContext } from "react"
import { ticketPurchaseContext } from "../provider/TicketPurchaseProvider"
import ButtonCheckout from "./ButtonCheckout"

const ButtonNavigation = () => {
  const { currentPage, setCurrentPage } = useContext(ticketPurchaseContext) as TicketPurchaseContext
  const pageChange = (condition: boolean) => {
    if(condition) {
      setCurrentPage((prev: number) => prev+1);
    }
    if(!condition && currentPage != 1){
      setCurrentPage((prev: number) => prev-1);
    }
  }
  return (
    <>
      {currentPage >= 3 ? (
        <ButtonCheckout />
      ) : (
        <ButtonNextPrev callback={(condition) => pageChange(condition)} />
      )}
    </>
  )
}

const ButtonNextPrev = ({callback}:{callback:(condition:boolean)=>void}) => {
  const buttonClick = (e:React.MouseEvent<HTMLButtonElement>, condition:boolean) => {
    e.preventDefault()
    callback(condition)
  }
  return (
    <div>
      <button onClick={(e) => buttonClick(e, false)}>Prev</button>
      <button onClick={(e) => buttonClick(e, true)}>Next</button>
    </div>
  )
}


export default ButtonNavigation
