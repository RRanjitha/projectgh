/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ProjectghTestModule } from '../../../test.module';
import { ZonalInchargeDeleteDialogComponent } from 'app/entities/zonal-incharge/zonal-incharge-delete-dialog.component';
import { ZonalInchargeService } from 'app/entities/zonal-incharge/zonal-incharge.service';

describe('Component Tests', () => {
    describe('ZonalIncharge Management Delete Component', () => {
        let comp: ZonalInchargeDeleteDialogComponent;
        let fixture: ComponentFixture<ZonalInchargeDeleteDialogComponent>;
        let service: ZonalInchargeService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ProjectghTestModule],
                declarations: [ZonalInchargeDeleteDialogComponent]
            })
                .overrideTemplate(ZonalInchargeDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ZonalInchargeDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ZonalInchargeService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});
