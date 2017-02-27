import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: 'order-sheet',
  templateUrl: './order-sheet.component.html',
  styleUrls: ['./order-sheet.component.scss']
})
export class OrderSheetComponent implements OnInit {
    orderSheetForm;
    weirdRequestsControls;


  constructor(private formBuilder : FormBuilder) {
      this.buildForm();
  }

  ValueSelectNew = {
      name: "Value New",
      size: "Large",
  }

  buildForm(){
      this.orderSheetForm = this.formBuilder.group({
          customerName: this.formBuilder.control(null),
          specialtySandwich: this.formBuilder.control(null),
          ortherNotes: this.formBuilder.control(null),
          size: this.formBuilder.control(null),
          bread: this.formBuilder.control(null),
          weirdRequests: this.formBuilder.array([
              this.formBuilder.control(null)
          ]),
          meats: this.formBuilder.group({
              meatHam: this.formBuilder.control(null),
              meatTurkey: this.formBuilder.control(null),
              meatRoastBeef: this.formBuilder.control(null)
          }),
          cheeses: this.formBuilder.group({
              cheesesProvolone: this.formBuilder.control(null),
              cheesesCheddar: this.formBuilder.control(null),
              cheesesSwiss: this.formBuilder.control(null)
          }),
          veggiesAndSuch: this.formBuilder.group({
              veggieLettuce: this.formBuilder.control(null),
              veggieTomato :  this.formBuilder.control(null),
              veggieMustard: this.formBuilder.control(null)
          }),
      });
      this.weirdRequestsControls = this.orderSheetForm.get('weirdRequests') as FormArray;
  }


  onAddWeirdRequest(){
      this.weirdRequestsControls.push(this.formBuilder.control(null));
  }

  onRemoveWeirdRequest(index){
      this.weirdRequestsControls.removeAt(index);
  }

  onResetForm(){
      this.orderSheetForm.reset();
  }

  // onResetWeirdRequest(){
  //     this.weirdRequestsControls.reset();
  // }



  onSubmitForm(){
      console.log(this.orderSheetForm.value);
  }

  ngOnInit() {

  }

}
