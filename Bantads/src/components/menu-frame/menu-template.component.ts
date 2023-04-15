import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'menu-template',
  templateUrl: './menu-template.component.html',
  styleUrls: ['./menu-template.component.css']
})
export class MenuTemplateComponent {
  item1 = null
  item2 = null
  item3 = null
  item4 = null
  item5 = null
  item6 = null
  item7 = null
  item8 = null 
  item9 = null

  constructor(private router: Router) { }

  redirectToPage(page: string) {
    this.router.navigate([page]);
  }
}
