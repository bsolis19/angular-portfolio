import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[];
  constructor() { }

  ngOnInit() {
        this.images = [];
        this.images.push({source: 'assets/PRISM-sample.png', alt: 'Program Review Information System Management web app created using the \
        MEAN stack - Copyright © PRISM Team', title: 'PRISM Web App'});
    }

}
