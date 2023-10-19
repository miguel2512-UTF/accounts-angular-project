import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
    {
        path: "404",
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorRoutingModule {}