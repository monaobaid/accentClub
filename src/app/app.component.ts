import { Component } from '@angular/core';
import { ServAuthService } from './services/serv-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'accentclub'
  constructor(public fireAuthserv : ServAuthService) { }
  logout()
  {
      this.fireAuthserv.logout()
  }
}
