import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/login/_services/auth.service';




@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  date: string;
  phone: number;

   constructor(private formBuilder: FormBuilder, private authService: AuthService) { }



   ngOnInit() {
     this.registerForm = this.formBuilder.group({
       address: ['', Validators.required],
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       phoneNumber: ['', Validators.required],
       postalCode: ['', Validators.required],
       city: ['', Validators.required],
       password: ['', [Validators.required, Validators.minLength(6)]],
       confirmPassword: ['', Validators.required],
       acceptTerms: [false, Validators.requiredTrue]
   }, {

   });
   }
   get f() { return this.registerForm.controls; }

   onSubmit(event) {
      event.preventDefault();
      this.submitted = true;

       // stop here if form is invalid
      if (this.registerForm.invalid) {
           console.log('invalid');
       }

       let email =this.registerForm.controls['email'].value;
       let firstName=this.registerForm.controls['firstName'].value;
       let lastName=this.registerForm.controls['lastName'].value;
       let address=this.registerForm.controls['address'].value;
       let phoneNumber=this.registerForm.controls['phoneNumber'].value;
       let password =this.registerForm.controls['password'].value;
       let postalCode=this.registerForm.controls['postalCode'].value;
       let city=this.registerForm.controls['city'].value;
      this.date = new Date().toISOString();
      this.phone = parseInt(phoneNumber);
      console.log(email, firstName, lastName, email, address, phoneNumber, password, this.date);
       // display form values on success
//      this.authService.createUser(firstName, lastName, email, password, address, this.phone, this.date, postalCode, city);
       }

   onReset() {
       this.submitted = false;
       this.registerForm.reset();
   }
  }
