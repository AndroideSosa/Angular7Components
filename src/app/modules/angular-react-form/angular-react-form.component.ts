import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/global-functions/export-functions';

@Component({
  selector: 'app-angular-react-form',
  templateUrl: './angular-react-form.component.html',
  styleUrls: ['./angular-react-form.component.css']
})
export class AngularReactFormComponent implements OnInit {
  
  //Se declara la variable del grupo del formulario reactivo
  registerForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}

}
