import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(){

    this.auth.login().subscribe(resp=> {

      if(resp.id){

        this.router.navigate(['/lazy'])
      }


    })
    //ir al backed, confirmar que exista el usuario
    //navegar a la pantalla de heroes con el router

    this.router.navigate(['/lazy'])

  }

  invitado(){
    this.router.navigate(['/lazy'])
    this.auth.logout();
  }

}
