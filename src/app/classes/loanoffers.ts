export class Loanoffers {
    loanid !: number
    loansname !: string 
    loanvehicle !: string
    loanamount !: number
    loanrate !: number
    loantenuremonths !: number
    loanemiamount !: number
    processingfee !: number

   
    constructor(loanid : number , loansname : string, loanvehicle :string, loanamount : number
        ,loanrate : number
        ,loantenuremonths : number
        ,loanemiamount : number
        ,processingfee : number)
    {
      this.loanid = loanid
      this.loansname = loansname
      this.loanvehicle = loanvehicle
      this.loanamount = loanamount
      this.loanrate = loanrate
      this.loantenuremonths = loantenuremonths
      this.loanemiamount = loanemiamount
      this.processingfee = processingfee
    }

}
