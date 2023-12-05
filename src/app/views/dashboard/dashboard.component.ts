import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { abcForms } from '../../../environments/generals';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterOutlet, MatIconModule, MatButtonModule],
    templateUrl: './dashboard.component.html',
    //   styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    public title: string = '';
    abcForms: any;
    constructor() {}
    ngOnInit() {
        this.title = 'Dashboard';
        this.abcForms = abcForms;
    }
}
