import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
    public nome! : String;
    public sobrenome! : String;
    ngOnInit(): void {
      this.nome = "Gabriel";
      this.sobrenome = "Carvalho"; 
    }
}
