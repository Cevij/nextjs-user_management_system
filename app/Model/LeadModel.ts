import { STATUS } from "./StatusEnum"

// This type is used to define the shape of our data. e.g we want our id to be string and status none other than these four options
export type Lead = {
    id: string
    name: number
    email: string
    status: number | string
    estimated_sale_amount: number
    estimated_commission: number
}