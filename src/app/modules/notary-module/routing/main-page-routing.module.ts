import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { MainPageResolver } from './resolvers/main-page.resolver';

const routes: Routes = [
{
    path: '',
    resolve: {
        data: MainPageResolver,
    },
    component: MainPageComponent,
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainPageRoutingModule {}