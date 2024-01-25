import ApiServer from "@/app/api/axios/ApiServer"
import TicketDetail from "@/components/dashboard/TicketDetail"
import ResponseMessageAdmin from "@/components/ticket/ResponseMessageAdmin"

const Page = async ({params}:{params : {id:string}}) => {
  let error
  const data = await ApiServer.get(`/api/tickets/${params.id}/get`)
  .then((res) => {
    return res.data.ticket
  })
  .catch((err) => {
    error = err.response.status
  })

  return (
    <>
      {error == 404 && (
        <ResponseMessageAdmin
        type="error"
        message="Tiket Tidak Ditemukan"
        subMessage={`Harap cek kembali ID tiket yang di tuju.`} 
        />
      )}
      {data && (
        <TicketDetail data={data} />
      )}
    </>
  )
}

export default Page
