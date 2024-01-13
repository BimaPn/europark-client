interface TicketPurchaseContext {
  ticketInformationData: TicketInformationForm
  ticketCheckoutData: TicketCheckoutForm
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
}

interface TicketInformationForm {
  visit_date?: Date
  schedule_id?: number
  ticket_quantity?: TicketQuantity[]
  price?: number
}

interface TicketQuantity {
  id: number
  quantity: number
}

interface TicketCheckoutForm {
  name?: string
  indentity_card_picture?: File
  whatsapp_number?: number | string
  institute_name?: string
  institute_address?: string
}
