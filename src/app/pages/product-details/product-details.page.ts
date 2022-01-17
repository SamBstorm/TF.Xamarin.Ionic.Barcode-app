import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { OpenFoodFactsAPIService } from 'src/app/services/open-food-facts-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  public code : string
  public product : IProduct

  constructor(
    private _OFFAPI : OpenFoodFactsAPIService,
    private _activatedRoute : ActivatedRoute
    ) { }

  ngOnInit() {
    this.code = this._activatedRoute.snapshot.params['id'];
    this._OFFAPI.getProduct(this.code).subscribe( data => this.product = data);
  }

}
