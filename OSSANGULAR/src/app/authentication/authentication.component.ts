import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorage } from './helper/token-storage';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit{

  model: any = {};
  loading = false;
  returnUrl: string;
  error = '';

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) {
  
  }

    
  ngOnInit(): void {
    // reset login status
    this.token.signOut();
    
  } 
  signOut(){
    this.token.signOut();
  }

  login(): void {
    this.authService.authentication(this.model.username, this.model.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['/']);
      },
      
    );
  }
}
