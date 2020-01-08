import {Input} from '@angular/core';
import * as THREE from 'three';
import {AbstractObject3D} from '../abstract-object-3d';

export abstract class AbstractConnector<T extends THREE.Object3D> extends AbstractObject3D<T> {

  @Input()
  source: AbstractObject3D<THREE.Object3D>;

  @Input()
  target: AbstractObject3D<THREE.Object3D>;

  protected newObject3DInstance(): T {
    const mesh = this.createConnectorObject();
    this.watchObjects();
    return mesh;
  }

  private watchObjects() {
    this.source.changed.subscribe(item => {
      this.updateLineGeometry();
    });

    this.target.changed.subscribe(item => {
      this.updateLineGeometry();
    });
  }

  protected getLineGeometry(): THREE.BufferGeometry {
    if (!this.source || !this.target) {
      throw new Error('AbstractConnector: source or target inputs are missing!');
    }
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const source = this.source.getObject().position;
    const target = this.target.getObject().position;
    positions.push(source.x, source.y, source.z);
    positions.push(target.x, target.y, target.z);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }


  /**
   * Create line mesh
   */
  abstract createConnectorObject(): T;

  /**
   * If at least one line end (source or target object)  changed, then line geoetry should be updated as well
   * // TODO: Calculate only when source/target positions were changed
   */
  abstract updateLineGeometry(): void;

}
