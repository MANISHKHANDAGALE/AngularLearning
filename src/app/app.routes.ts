import { Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { DirectivesComponent } from './directives/directives.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { PassingComponent } from './passing/passing.component';
import { PassingsComponent } from './passings/passings.component';
import { TformComponent } from './tform/tform.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { SignalDynamicStyleComponent } from './signal-dynamic-style/signal-dynamic-style.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ServicesComponent } from './services/services.component';
import { ApiServicesComponent } from './api-services/api-services.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"profile",component:ProfileComponent,data:{name:'abc'}},
    {path:"practice",component:PracticeComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"to-do-list",component:ToDoListComponent},
    {path:"user/:id/:name",component:UserComponent},
    {path:"form",component:FormComponent},
    {path:"passing",component:PassingComponent},
    {path:"passings",component:PassingsComponent},
    {path:"TemplateForm",component:TformComponent},
    {path:"parent",component:ParentComponent},
    {path:"child",component:ChildComponent},
    {path:"ControlFlow",component:ControlFlowComponent},
    {path:"DynamicStylingSignals",component:SignalDynamicStyleComponent},
    {path:"pipes",component:PipesComponent},
    {path:"lifecycle",component:LifeCycleComponent},
    {path:"services",component:ServicesComponent},
    {path:"apiServices",component:ApiServicesComponent},
    // {path:"LazyLoading",component:LazyLoadingComponent},
    {path:"LazyLoading",loadComponent:()=> import('./lazy-loading/lazy-loading.component').then((c)=>c.LazyLoadingComponent)},
    {path:"**",component:PageNotFoundComponent}
];
