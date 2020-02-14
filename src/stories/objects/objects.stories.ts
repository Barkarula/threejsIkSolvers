import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from 'atft';
//import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {number, withKnobs} from '@storybook/addon-knobs';

//console.log('atft')
//console.log(AtftModule)

import markdownNotes from './objects.stories.md';

// Перемещение на некоторую
const diffTrX = 30;
// 3.14159 for radian 6.28, 180
const diffRtX = 0;

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

  constructor() {
    //console.log(this)
  }
}


storiesOf('Objects', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('2.Abstract props  ', () => ({
    component: StorybookObjectComponent,
    props: {
      translateX: number('translate_X', 0),
      translateY: number('translate_Y', 0),
      translateZ: number('translate_Z', 0),

      rotateX: number('rotate_X', 0)*0.0174533,
      rotateY: number('rotate_Y', 0,)*0.0174533,
      rotateZ: number('rotate_Z', 0,)*0.0174533,

      translateX1: number('translate_X1', 0),
      translateY1: number('translate_Y1', 0),
      translateZ1: number('translate_Z1', diffTrX),

      rotateX1: number('rotate_X1', 0)*0.0174533,
      rotateY1: number('rotate_Y1', 0)*0.0174533,
      rotateZ1: number('rotate_Z1', diffRtX)*0.0174533,
    }
  }), {
    notes: { markdown: markdownNotes }
    }
  )
;