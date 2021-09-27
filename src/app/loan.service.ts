import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { from, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  public subject=new Subject<boolean>();
  constructor() { }


  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
}
