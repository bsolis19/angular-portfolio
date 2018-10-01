import { Component, OnInit, Inject} from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];
  github: string;

  constructor(@Inject('GITHUB_URL') githubURL: string, private router: Router) {
    this.github = githubURL;
  }

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa fa-home', routerLink: '/home'},
      {label: 'Projects', icon: 'fa fa-clipboard', routerLink: '/projects'},
      {label: 'Employment', icon: 'fa fa-briefcase', routerLink: '/employment'}
    ];
  }
}
