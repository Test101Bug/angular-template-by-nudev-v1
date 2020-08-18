import {LoginComponent} from '../pages/login/login.component'
import {MainComponent} from '../layouts/main/main.component'


export default[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent, children: [] },
]


