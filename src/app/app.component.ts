import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'calculator';

  calValue: number = 0;
  funcT: any ='NoFunction';
  callNumber:string= 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val:string, type: any){
    if(type == 'number'){
      this.onNumberClick(val);
    }else if(type == 'function'){
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string){
    if(this.callNumber != 'noValue'){
      this.callNumber = this.callNumber + val;
    }else{
      this.callNumber = val;
    }
    this.calValue = parseFloat(this.callNumber);
  }

  onFunctionClick(val: string){
    // call the clear method when click
    if(val == 'c'){
      this.clearAll();
    }

    else if(this.funcT == 'NoFunction'){
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.callNumber = 'noValue';
      this.funcT = val;
    }else if(this.funcT != 'NoFunction'){
      this.secondNumber = this.calValue;

      this.valueCalculated(val);
    }
  }

  valueCalculated(val: string){
    if(this.funcT == '+'){
      const Total = this.firstNumber + this.secondNumber
      this.totalAssignValues(Total, val);
    }

    if(this.funcT == '-'){
      const Total = this.firstNumber - this.secondNumber
      this.totalAssignValues(Total, val);
    }

    if(this.funcT == '*'){
      const Total = this.firstNumber * this.secondNumber
      this.totalAssignValues(Total, val);
    }

    if(this.funcT == '/'){
      const Total = this.firstNumber / this.secondNumber
      this.totalAssignValues(Total, val);
    }

    if(this.funcT == '%'){
      const Total = this.firstNumber % this.secondNumber
      this.totalAssignValues(Total, val);
      
    }
  }

  totalAssignValues(Total: number, val:string){
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.callNumber = 'noValue';
    this.funcT = val;
    if(val == '='){this.onEqualPress()}
  }

  onEqualPress(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.callNumber = 'noValue'  
  }

  clearAll(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.callNumber = 'novalue';
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
