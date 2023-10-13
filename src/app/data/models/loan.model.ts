import Payment from "./payment.model"

export default interface Loan {
    id: number
    debtorName: string
    loanValue: number
    debtValue: number
    loanDate: string
    isPayment: boolean
    payments: Payment[]
    userId: number
}