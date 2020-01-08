import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RendererService} from '../../renderer/renderer.service';
import {PlaneMeshComponent} from './plane-mesh.component';
import {StatsService} from '../../stats';

describe('mesh', () => {
  describe('PlaneMeshComponent', () => {
    let component: PlaneMeshComponent;
    let fixture: ComponentFixture<PlaneMeshComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          PlaneMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(PlaneMeshComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('should create an instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
