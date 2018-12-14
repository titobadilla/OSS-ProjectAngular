import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

import { TokenStorage } from '../authentication/helper/token-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit,OnChanges {
  flagSignOut:boolean=false;
  flagSignIn:boolean=true;
  flagViewMenu:boolean=false;
  tokenValid:String;

  constructor(private token:TokenStorage,private router: Router) {

   }
   ngOnChanges(): void {
    
  }

  ngOnInit() {
    this.modifyButtons();
    var timeReload=setInterval(() => { this.modifyButtons();}, 1000);
  }

  public modifyButtons(){
    this.tokenValid=this.token.getToken();

    if(this.tokenValid!= null){
      this.flagSignIn=false;
      this.flagSignOut=true;
    }else{
      this.flagSignIn=true;
      this.flagSignOut=false;
    }

  }
  

  public signOut(){
    this.token.signOut();  
    this.flagViewMenu=false;
    this.modifyButtons();
    this.router.navigate(['/']);
  }

}
