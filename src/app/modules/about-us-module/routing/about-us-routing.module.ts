import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from "../components/about-us/about-us.component";
import { AboutUsResolver } from "./resolvers/about-us.resolver";

const routes: Routes = [
{
    path: 'about-us',
    resolve: {
        data: AboutUsResolver,
    },
    component: AboutUsComponent,
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutUsRoutingModule {}