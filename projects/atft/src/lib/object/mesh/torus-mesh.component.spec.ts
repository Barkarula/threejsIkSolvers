import {TorusMeshComponent} from './torus-mesh.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RendererService} from '../../renderer/renderer.service';
import {StatsService} from '../../stats';

describe('mesh', () => {
  describe('TorusMeshComponent', () => {
    let component: TorusMeshComponent;
    let fixture: ComponentFixture<TorusMeshComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          TorusMeshComponent
        ],
        providers: [
          StatsService,
          RendererService
        ]
      });
      fixture = TestBed.createComponent(TorusMeshComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));


    it('should create an instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

  });
});
