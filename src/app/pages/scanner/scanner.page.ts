import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScanResult } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {

  public barcodeResult : BarcodeScanResult;

  constructor(
    private _scanner : BarcodeScanner,
    private _platform : Platform,
    private _router : Router
    ) { }

  ngOnInit() {
  }

  public async onScan(){
    //Appel du service du scanner
    if(this._platform.is('cordova')) this.barcodeResult = await this._scanner.scan();
    else this.barcodeResult = {text : "80052760",format:'EAN_8', cancelled : false };

    this._router.navigate(["product-details",this.barcodeResult.text])
  }

}
