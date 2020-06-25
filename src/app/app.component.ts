import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html' 
})
export class AppComponent {
  arrayInputs = [
    {num : [["","33", "12"]], value: 'toto'},
     {num: [["","123"]], value : 'titi'}];

  formName =this.fb.group({
    controllerArray: this.fb.array([])
  })  

  constructor(private fb: FormBuilder) { }

  setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(address => this.fb.group(address));
    const formArray = this.fb.array(arrayFG);
    this.formName.setControl('controllerArray', formArray);
  }

  ngOnInit() { this.setArrayInputs(this.arrayInputs) }

  select(index) {

console.log(this.formName.controls.controllerArray['controls'].length)
let myArray = this.formName.controls.controllerArray['controls'];
console.log(myArray);
for(let i=0; myArray.length > i ; i++) {
  if(i != index){
    myArray[i].disable();
  } else {
    myArray[i].enable();
  }
}
  console.log(this.formName.controls.controllerArray['controls'][index])
  
  console.log(index);


   }
}