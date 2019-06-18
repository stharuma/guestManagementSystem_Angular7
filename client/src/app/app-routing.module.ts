import{NgModule} from '@angular/core';
import {Routes, RouterModule, RouterState}from '@angular/router';
import {LoginComponent}from './shared/login.component'
import {AboutusComponent}from './shared/aboutus.component'

const routes:Routes=[
    {path:'', redirectTo:'/aboutus', pathMatch:'full'},
    {path:'aboutus', component:AboutusComponent},
    {path:'login', component:LoginComponent},
    {path:'**', redirectTo:'/aboutus', pathMatch:'full'},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}