import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent {


  constructor(private router: Router) { }

  redirectToPage(page: string) {
    this.router.navigate([page]);
  }

}
