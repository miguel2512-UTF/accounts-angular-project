import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { adminGuard } from "@core/guards/admin.guard";
import { HomePageComponent } from "@modules/home/pages/home-page/home-page.component";
import { LoanPageComponent } from "@modules/loan/pages/loan-page/loan-page.component";
import { UserPageComponent } from "@modules/user/pages/user-page/user-page.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
        loadChildren: () => import("@modules/home/home.module").then(m => m.HomeModule)
    },
    { 
        path: 'user', 
        component: UserPageComponent,
        loadChildren: () => import("@modules/user/user.module").then(m => m.UserModule),
        canActivate: [adminGuard]
    },
    { 
        path: 'loan', 
        component: LoanPageComponent,
        loadChildren: () => import("@modules/loan/loan.module").then(m => m.LoanModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}