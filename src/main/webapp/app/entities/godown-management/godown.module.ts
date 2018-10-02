// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Module Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GodownRoutingModule } from 'app/entities/godown-management/godown.routing.module';
import { GodownComponent } from 'app/entities/godown-management/godown.component';
import { GodownPurchaseComponent } from 'app/entities/godown-management/godown-purchase.component';
import { GodownStockComponent } from 'app/entities/godown-management/godown-stock.component';

// Date picker from bootstrap
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from '../../shared/util/datepicker-adapter';
import { ProjectghSharedModule } from 'app/shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        FontAwesomeModule,
        NgbModule.forRoot(),
        CollapseModule.forRoot(),
        GodownRoutingModule,
        ProjectghSharedModule
    ],
    declarations: [GodownComponent, GodownPurchaseComponent, GodownStockComponent],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [NgbModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GodownModule {}
