import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "@modules/home/pages/home-page/home-page.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    { 
        path: 'user', 
        loadChildren: () => import("@modules/user/user.module").then(m => m.UserModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}