import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { LoginComponent } from 'app/views/login/login.component';
import { LoginRoutingModule } from 'app/views/login/login-routing.module';

@NgModule({
    imports: [FormsModule, LoginRoutingModule, ChartsModule, BsDropdownModule, ButtonsModule.forRoot()],
    declarations: [LoginComponent]
})
export class LoginModule {}
