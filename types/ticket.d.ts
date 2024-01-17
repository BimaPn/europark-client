interface TicketPurchaseContext {
  ticketCheckoutData: TicketCheckoutForm
  ticketInformationData: TicketInformationForm
  setTicketInformationData: Dispatch<SetStateAction<TicketInformationForm>>
  setTicketCheckoutData: Dispatch<SetStateAction<TicketCheckoutForm>>
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  ticketQuantity: TicketQuantity[]
  setTicketQuantity: Dispatch<SetStateAction<TicketQuantity[]>>
  maxQuantity: number
  setMaxQuantity: Dispatch<SetStateAction<number>>
  disableSubmit: boolean
  setDisableSubmit: Dispatch<SetStateAction<number>>
}

interface TicketInformationForm {
  visit_date?: Date
  schedule?: Schedule
}

interface TicketQuantity {
  id: number
  type: string
  description?: string
  quantity: number
  price: number
}

interface Schedule {
  id: number,
  schedule: string
}

interface TicketCheckoutForm {
  name: string
  email: string
  identity_card_picture: File | null
  whatsapp_number: string
  institute_name?: string
  institute_address?: string
}
interface TicketCheckoutFormErrors {
  name?: Array,
  email?: Array,
  identity_card_picture?: Array
  whatsapp_number?: Array
  institute_name?: Array
  institute_address?: Array
}
