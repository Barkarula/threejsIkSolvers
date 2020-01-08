import {Component, forwardRef, Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';
import {appliedColor} from '../../util';
import {RendererService} from '../../renderer/renderer.service';

@Component({
  selector: 'atft-point-light',
  providers: [{provide: AbstractObject3D, useExisting: forwardRef(() => PointLightComponent)}],
  template: '<ng-content></ng-content>'
})
export class PointLightComponent extends AbstractObject3D<THREE.PointLight> {

  @Input() color = 0xffffff;
  @Input() intensity = 1;
  @Input() distance = 500;
  @Input() castShadow = false;

  constructor(
    protected rendererService: RendererService
  ) {
    super(rendererService);
  }

  protected newObject3DInstance() {
    const light = new THREE.PointLight(appliedColor(this.color), this.intensity, this.distance);

    if (this.castShadow === true) {
      light.castShadow = this.castShadow;
      // TODO: props
      light.shadow.mapSize.width = 1024;
      light.shadow.mapSize.height = 1024;
      light.shadow.camera.near = 0.5;
      light.shadow.camera.far = 500;
      light.shadow.bias = -0.001;
      light.shadow.radius = 1;
    }

    return light;
  }

}
