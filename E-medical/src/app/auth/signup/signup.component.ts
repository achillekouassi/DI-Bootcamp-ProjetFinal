import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: any = {
    nom:null,
    telephone: null,
    password:null
  }

  constructor(private AuthService:AuthService){}
  

  ngOnInit(): void{
  }

  onSubmit(): void{
    console.log(this.form)
    this.AuthService.login(this.form).subscribe(
      (data: any) => console.log(data),
      (err: any) => console.log(err)
    )

}

}

