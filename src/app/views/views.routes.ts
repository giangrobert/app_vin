import { Routes } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

export default [
    {
        path     : '',
        component: DashboardComponent,
    },
] as Routes;
