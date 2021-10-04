export class LoanProfile{
    loan_id !: number; 
    user_ref_id !: number; 
    Vehicle_id !: number; 
    loan_application_id !: number; 
    total_amount !: number; 
    total_installments !: number; 
   // completed_installments !: number; 
   // remaining_amount !: number;  
    emi !: number; 
    loan_start_date !: Date; 
    loan_end_date !: Date; 
}