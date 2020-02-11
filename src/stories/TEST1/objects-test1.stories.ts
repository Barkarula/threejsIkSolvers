import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule, AnimationService} from 'atft';
//import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {number, withKnobs} from '@storybook/addon-knobs';

// actor
// import {AtftDataCenterActorModule} from '../../../projects/atft/src/lib/actor/data-center/atft-data-center-actor.module';
// import {AnimationService} from '../../../projects/atft/src/lib/animation/animation.service';
// animate
// import {BoxMeshComponent} from '../../../projects/atft/src/lib/object/mesh/box-mesh.component';
// import {AnimationService} from '../../../projects/atft/src/lib/animation/animation.service';
// import {AbstractObject3D} from '../../../projects/atft/src/lib/object/abstract-object-3d';
//console.log('atft')
//console.log(AtftModule)

import markdownNotes from './objects-mesh.stories.md';

const diffTrZ1 = 30;
const diffTrY1 = -10;
const diffRtZ1 = 0;
const diffTrZ2 = 60;
const diffTrY2 = 10;
const diffRtZ2 = 0;

@Component({
  template: axesSceneWrapper(`
    <atft-empty
        [translateX]="translateX"
        [translateY]="translateY"
        [translateZ]="translateZ"
        [rotateX]="rotateX"
        [rotateY]="rotateY"
        [rotateZ]="rotateZ"
        #a
    >
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="phong" materialColor="0x00ff00">
      </atft-cylinder-mesh>
      <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0x0000ff">
      </atft-torus-mesh>
            <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0xff0000" [rotateX]="90 | deg2rad">
      </atft-torus-mesh>
    </atft-empty>

    <atft-empty
        [translateX]="translateX1"
        [translateY]="translateY1"
        [translateZ]="translateZ1"
        [rotateX]="rotateX1"
        [rotateY]="rotateY1"
        [rotateZ]="rotateZ1"
        #b
        #c
    >
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="phong" materialColor="0x00ff00">
      </atft-cylinder-mesh>
      <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0x0000ff">
      </atft-torus-mesh>
            <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0xff0000" [rotateX]="90 | deg2rad">
      </atft-torus-mesh>
    </atft-empty>

    <atft-mesh-line-connector [source]="a" [target]="b" materialColor="0xff0000" [animated]="true"></atft-mesh-line-connector>

    <atft-empty
        [translateX]="translateX2"
        [translateY]="translateY2"
        [translateZ]="translateZ2"
        [rotateX]="rotateX2"
        [rotateY]="rotateY2"
        [rotateZ]="rotateZ2"
        #d
    >
      <atft-cylinder-mesh [radiusTop]="2.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="phong" materialColor="0x00ff00">
      </atft-cylinder-mesh>
      <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0x0000ff">
      </atft-torus-mesh>
            <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0xff0000" [rotateX]="90 | deg2rad">
      </atft-torus-mesh>
    </atft-empty>

    <atft-line-connector [source]="c" [target]="d" materialColor="0xff0000"></atft-line-connector>
  `)
})
class StorybookObjectComponent {

  //constructor() {
    //console.log(this)
  //}

  constructor(private animationService: AnimationService) {
    this.animationService.start();
  }
}

/*
storiesOf('Objects-mesh', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('abstract props  ', () => ({
    component: StorybookObjectComponent,
    props: {
      translateX: number('translate_X', 0),
      translateY: number('translate_Y', 0),
      translateZ: number('translate_Z', 0),

      rotateX: number('rotate_X', 0)*0.0174533,
      rotateY: number('rotate_Y', 0,)*0.0174533,
      rotateZ: number('rotate_Z', 0,)*0.0174533,

      translateX1: number('translate_X1', 0),
      translateY1: number('translate_Y1', diffTrY1),
      translateZ1: number('translate_Z1', diffTrZ1),

      rotateX1: number('rotate_X1', 0)*0.0174533,
      rotateY1: number('rotate_Y1', 0)*0.0174533,
      rotateZ1: number('rotate_Z1', diffRtZ1)*0.0174533,

      translateX2: number('translate_X2', 0),
      translateY2: number('translate_Y2', diffTrY2),
      translateZ2: number('translate_Z2', diffTrZ2),

      rotateX2: number('rotate_X2', 0)*0.0174533,
      rotateY2: number('rotate_Y2', 0)*0.0174533,
      rotateZ2: number('rotate_Z2', diffRtZ2)*0.0174533,
    }
  }), {
    notes: { markdown: markdownNotes }
    }
  )
;
*/