import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
  }
  onSubmit(): void{
    console.log(this.form)
    this.http.post('http://localhost:8080/auth/login', this.form).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
  }
}
