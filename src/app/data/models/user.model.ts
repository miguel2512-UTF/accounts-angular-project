import Loan from "./loan.model"

export default interface User {
    id: number
    email: string
    isActive: boolean
    loans: Loan[]
    role: string
}