import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { PortfolioComponent } from './pages/portfolio/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about/about.component';
export const routes: Routes = [

    {
        path:'',
        redirectTo: 'portfolio',
        pathMatch: 'full',
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
             {
                path: 'portfolio',
                component: PortfolioComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
        ]
    },
           
        
    

];
