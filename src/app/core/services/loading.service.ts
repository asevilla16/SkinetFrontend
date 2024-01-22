import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingProceduresCount = 0;

  constructor(
    private spinnerService: NgxSpinnerService
  ) { }

  newLoading(){
    this.loadingProceduresCount++;
    this.spinnerService.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255, 255, 255, 0.7',
      color: '#333333'
    })
  }

  idle(){
    this.loadingProceduresCount--;
    if(this.loadingProceduresCount <= 0){
      this.loadingProceduresCount = 0;
      this.spinnerService.hide();
    }
  }

}
