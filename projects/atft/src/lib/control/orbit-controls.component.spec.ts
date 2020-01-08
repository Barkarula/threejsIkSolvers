import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OrbitControlsComponent} from './orbit-controls.component';
import {RendererService} from '../renderer/renderer.service';
import {AtftControlModule} from './atft-control.module';
import {Component} from '@angular/core';
import {AtftCameraModule} from '../camera/atft-camera.module';
import {AtftRendererModule} from '../renderer/atft-renderer.module';
import {AtftObjectModule} from '../object/atft-object.module';
import {AnimationService} from '../animation';
import {RaycasterService} from '../raycaster';
import {StatsService} from '../stats';

@Component({
  selector: 'atft-mock',
  template: `
      <atft-orbit-controls [rotateSpeed]=1 [zoomSpeed]=1.2>
          <atft-renderer-canvas>
              <atft-perspective-camera [fov]=60 [near]=1 [far]=1100></atft-perspective-camera>
              <atft-scene></atft-scene>
          </atft-renderer-canvas>
      </atft-orbit-controls>
  `
})
class MockComponent {

}

describe('controls', () => {

  describe('OrbitControlsComponent', () => {
    let component: OrbitControlsComponent;
    let fixture: ComponentFixture<OrbitControlsComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftControlModule
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService,
          RaycasterService
        ]
      });
      fixture = TestBed.createComponent(OrbitControlsComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('no camera', () => {
      expect(fixture.detectChanges).toThrow();
    });
  });


  describe('OrbitControlsComponent mock', () => {
    let component: MockComponent;
    let fixture: ComponentFixture<MockComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          AtftControlModule,
          AtftCameraModule,
          AtftRendererModule,
          AtftObjectModule
        ],
        declarations: [
          MockComponent
        ],
        providers: [
          StatsService,
          RendererService,
          AnimationService,
          RaycasterService
        ]
      });
      fixture = TestBed.createComponent(MockComponent);
      component = fixture.componentInstance;
      return TestBed.compileComponents();
    }));

    it('init', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });


});
