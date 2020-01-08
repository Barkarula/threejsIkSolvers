import {SphereMeshComponent} from './sphere-mesh.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RendererService} from '../../renderer/renderer.service';
import {StatsService} from '../../stats';

describe('mesh', () => {
  describe('SphereMeshComponent', () => {
    let component: SphereMeshComponent;
    let fixture: ComponentFixture<SphereMeshComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          SphereMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(SphereMeshComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('should create an instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
