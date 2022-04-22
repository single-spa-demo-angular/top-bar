import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'appl-ng';
  
  url = assetUrl("../assets/images/seasons-logos.jpeg");
  blackLogo = assetUrl("../assets/images/seasons-logos_black.png")
  baseUrl = assetUrl("../assets/images/")

  ngOnInit(): void {
  }
}
