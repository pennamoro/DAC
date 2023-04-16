import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent {


  constructor(private router: Router) { }

  redirectToPage(page: string) {
    this.router.navigate([page]);
  }

}
