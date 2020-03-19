import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'form';
  registrationForm: FormGroup;

  ngOnInit(){
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl(),
      rating: new FormControl(),
    })

    this.registrationForm.controls.rating.setValue(3);    
    //this.registrationForm.controls.rating.disable();
  }

  onSubmit(event: Event){
    console.log(this.registrationForm.value);
  }

  onChange(event: Event){
    alert(1);
    console.log(`onStartChanged ${event}`);
  }

}
