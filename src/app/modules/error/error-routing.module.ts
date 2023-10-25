import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { NotAuthorizedComponent } from "./pages/not-authorized/not-authorized.component";

const routes: Routes = [
    {
        path: "404",
        component: NotFoundComponent
    },
    {
        path: "401",
        component: NotAuthorizedComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorRoutingModule {}