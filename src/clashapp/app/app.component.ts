import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TroopListComponent }  from './troop-list.component';
// import { HeroesComponent }     from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';
// import { HeroService }         from './hero.service';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <!--nav>
        <a [routerLink]="['TroopList']">Troop List</a>
    </nav-->
    <router-outlet></router-outlet>
  `,

  // <nav>
  //     <a [routerLink]="['Dashboard']">Dashboard</a>
  //     <a [routerLink]="['Heroes']">Heroes</a>
  //   </nav>
  //   <router-outlet></router-outlet>
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
  //   HeroService,
  ]
})
@RouteConfig([
  { path: '/',  name: 'TroopList',  component: TroopListComponent, useAsDefault: true }
  // { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
  // { path: '/heroes',     name: 'Heroes',     component: HeroesComponent }
])
export class AppComponent {
  title = 'Calculator';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/