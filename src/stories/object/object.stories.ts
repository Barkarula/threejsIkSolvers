import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from 'atft';
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
console.log('atft')
console.log(AtftModule)

import markdownNotes from './object.stories.md';

// Перемещение на некоторую
const diffTrX = 30;
// 3.14159
const diffRtX = 3.14159;

@Component({
  template: axesSceneWrapper(`
    <atft-empty
        [translateX]="translateX"
        [translateY]="translateY"
        [translateZ]="translateZ"
        [rotateX]="rotateX"
        [rotateY]="rotateY"
        [rotateZ]="rotateZ"
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
  `)
})
class StorybookObjectComponent {

}


storiesOf('Object', module)
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
      translateX: number('trX', 0, {range: true, min: -50, max: 50, step: 1}),
      translateY: number('trY', 0, {range: true, min: -50, max: 50, step: 1}),
      translateZ: number('trZ', 0, {range: true, min: -50, max: 50, step: 1}),
      rotateX: number('rtX rad', 0, {range: true, min: 0, max: 6.28, step: 0.1}),
      rotateY: number('rtY rad', 0, {range: true, min: 0, max: 6.28, step: 0.1}),
      rotateZ: number('rtZ rad', 0, {range: true, min: 0, max: 6.28, step: 0.1}),
      translateX1: number('trX1', 0, {range: true, min: -50, max: 50, step: 1}),
      translateY1: number('trY1', 0, {range: true, min: -50, max: 50, step: 1}),
      translateZ1: number('trZ1', diffTrX, {range: true, min: -50, max: 50, step: 1}),
      rotateX1: number('rtX1 rad', 0, {range: true, min: 0, max: 6.28, step: 0.1}),
      rotateY1: number('rtY1 rad', 0, {range: true, min: 0, max: 6.28, step: 0.1}),
      rotateZ1: number('rtZ1 rad', diffRtX, {range: true, min: 0, max: 6.28, step: 0.1})
    }
  }), {
    notes: { markdown: markdownNotes }
    }
  )
;