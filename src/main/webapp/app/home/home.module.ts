import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectghSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
// For Core UI
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [ProjectghSharedModule, RouterModule.forChild([HOME_ROUTE]), TabsModule.forRoot()],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectghHomeModule {}
