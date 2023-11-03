import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoanPageComponent } from "./pages/loan-page/loan-page.component";

const routes: Routes = [
    {
        path: '',
        component: LoanPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoanRoutingModule { }