import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { adminGuard } from "@core/guards/admin.guard";
import { HomePageComponent } from "@modules/home/pages/home-page/home-page.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
        loadChildren: () => import("@modules/home/home.module").then(m => m.HomeModule)
    },
    { 
        path: 'user', 
        loadChildren: () => import("@modules/user/user.module").then(m => m.UserModule),
        canActivate: [adminGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}