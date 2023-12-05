import { Routes } from '@angular/router';
import { TreeContainerComponent } from "./containers/roles-container.component";
import { TreeComponent } from "./roles.component";

export default [

  {
    path     : '',
    component: TreeComponent,
    children: [
      {
        path: '',
        component: TreeContainerComponent,
        data: {
          title: 'Tree'
        }
      },
    ],
  },
] as Routes;
