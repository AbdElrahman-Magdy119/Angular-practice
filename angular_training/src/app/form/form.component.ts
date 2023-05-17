import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
     
  register= new FormGroup({
         name: new FormControl(null,
          [Validators.required, Validators.minLength(4),Validators.maxLength(5)]),
        //  email: new FormControl(null,
        //   [Validators.required, Validators.email]),
        //  password: new FormControl(null,
        //   [Validators.maxLength(5),Validators.required]),
        //  confirmPassword: new FormControl(null,
        //   [Validators.maxLength(30),Validators.required]),
  });
   
   // هنا انا بقوله هات الاوبجيكت الي هوه كل الفورم ولو كتبت . فاليو يجيب كل القيم الي كتبتها في الانبوت الي عندي
  onclick(register:FormGroup){
      console.log(register.value);
  }



}
