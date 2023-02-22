import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  email: string = '';
  password: string = '';

  error: any = null;

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    this.authService.sign({email: this.email, password: this.password}).subscribe({
      next: (data) => {
        this.error = null;
      },
      error: (err) => {
        this.error = err;
      }
    });
  }

}
