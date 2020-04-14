import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private route: Router, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "storefront",
      routeUrl: "/producs"
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.route.navigate(["/products/create"]);
  }

}
