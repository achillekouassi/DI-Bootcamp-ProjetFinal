import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    telephone: null,
    password:null
  }

  constructor() {}
  ngOnInit(): void {
  }
  onSubmit(): void{
    console.log(this.form)
  }
}
