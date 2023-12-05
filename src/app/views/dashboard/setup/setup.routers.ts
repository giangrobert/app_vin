import { Routes } from '@angular/router';
import {SetupComponent} from "./setup.component";


export default [
    {
        path     : '',
        component: SetupComponent,
        children: [
            {path: 'role', loadChildren: () => import('./roles/roles.routers')},
            {path: 'users', loadChildren: () => import('./users/user.routes')},
        ],
    },
] as Routes;
