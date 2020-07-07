import { PrimeiroComponent } from "./core/components/primeiro/primeiro.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SegundoComponent } from "./core/components/segundo/segundo.component";
import { ErroComponent } from "./core/components/erro/erro.component";

const routes: Routes = [
  { path: "", redirectTo: "/primeiro", pathMatch: "full" },
  { path: "primeiro", component: PrimeiroComponent },
  { path: "segundo", component: SegundoComponent },
  { path: "**", component: ErroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
