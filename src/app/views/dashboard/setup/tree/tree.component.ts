// import {Component, OnInit} from '@angular/core';
// import {abcForms} from "../../../../../environments/generals";
// @Component({
//   template: `
//     <div class="card shadow-gm-card m-1">
//       <h1 class="fa-3x icon-gm-float"><i class="{{abcForms.btnUser.icon}}"></i></h1>
//       <div class="card-body">
//         <router-outlet></router-outlet>
//       </div>
//     </div>
//   `,
// })
// export class RolesComponent implements OnInit {
//
//   public title: string = '';
//   abcForms:any;
//   constructor() {
//   }
//
//   ngOnInit() {
//     this.title = 'Roles';
//     this.abcForms = abcForms;
//   }
//
// }

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { abcForms } from '../../../../../environments/generals';
import { Component, OnInit } from '@angular/core';
import { TreeContainerComponent } from './containers/tree-container.component';

@Component({
    selector: 'app-tree',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    template: `
        <div   div class="card shadow-gm-card m-1 w-full flex-none">
            <h1 class="fa-3x icon-gm-float">
                <i class="{{ abcForms.btnUser.icon }}"></i>
            </h1>
            <div class="card-body">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    // styleUrl: './setup.component.scss'
})
export class TreeComponent implements OnInit {
    public title: string = '';
    abcForms: any;
    constructor() {}
    ngOnInit() {
        this.title = 'Arbol';
        this.abcForms = abcForms;
    }
}
