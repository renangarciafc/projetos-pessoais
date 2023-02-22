import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required]
  })

  constructor( private formBuilder: FormBuilder) { }

  submitForm(): void {
    console.log(this.cadastroForm)
  }

  ngOnInit(): void {
  }

}
