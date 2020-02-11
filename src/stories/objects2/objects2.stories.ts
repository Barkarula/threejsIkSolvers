import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, OnInit, DoCheck, AfterContentInit,  
  OnChanges, SimpleChanges, SimpleChange,
  AfterContentChecked, AfterViewChecked, AfterViewInit
} from '@angular/core';
import {AtftModule, AnimationService} from 'atft';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {number, withKnobs} from '@storybook/addon-knobs';

// https://github.com/storybookjs/storybook/issues/3855
import { manager } from '@storybook/addon-knobs/dist/registerKnobs.js'
const { knobStore } = manager

import markdownNotes from './objects-changes.stories.md';
            

// State 
let tr_x0 = 0;
let tr_y0 = 0;
let tr_z0 = 0;

let rt_x0 = 0;
let rt_y0 = 0;
let rt_z0 = 0;

  let tr_x1 = 0;
  let tr_y1 = -10;
  let tr_z1 = 30;

  let rt_x1 = 0;
  let rt_y1 = 0;
  let rt_z1 = 0;

let tr_x2 = 0;
let tr_y2 = 10;
let tr_z2 = 60;

let rt_x2 = 0;
let rt_y2 = 0;
let rt_z2 = 0;

let pzkMode = false;


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


class StorybookObjectMeshComponent implements OnInit, OnChanges,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {

  constructor(private animationService: AnimationService) {

    this.animationService.start();
  }

  // 1. Good place for inite state knobs
  ngOnInit() {}

  // 2. Good choice for update state knobs
  ngDoCheck() {

    // knobStore.store['translate_Y'].value = 20
    // knobStore.store['translate_Z'].value = 14
    // knobStore.store['translate_Y_tr0'].value = 20
    // knobStore.store['translate_Z_tr0'].value = 14
  }

  ngAfterContentInit() {}

  ngAfterContentChecked() {}

  ngAfterViewChecked() {}

  ngAfterViewInit() {}
 
  ngOnDestroy() {};

  ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {

      if (changes[propName].firstChange === false) {

        // Change translateX
        if (Object.keys(changes)[0] === 'translateX') {

          // knobStore.store['translate_Y'].value = 10
        }
      }
    }
  };
};


storiesOf('Objects-changes', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('abstract props  ', () => ({ 
    component: StorybookObjectMeshComponent,
    props: {
      translateX: number('translate_X', tr_x0, {}, 'tr0'),
      translateY: number('translate_Y', tr_y0, {}, 'tr0'),
      translateZ: number('translate_Z', tr_z0, {}, 'tr0'),

      rotateX: number('rotate_X', rt_x0, {}, 'rt0')*0.0174533,
      rotateY: number('rotate_Y', rt_y0, {}, 'rt0')*0.0174533,
      rotateZ: number('rotate_Z', rt_z0, {}, 'rt0')*0.0174533,

      translateX1: number('translate_X1', tr_x1, {}, 'tr1'),
      translateY1: number('translate_Y1', tr_y1, {}, 'tr1'),
      translateZ1: number('translate_Z1', tr_z1, {}, 'tr1'),

      rotateX1: number('rotate_X1', rt_x1, {}, 'rt1')*0.0174533,
      rotateY1: number('rotate_Y1', rt_y1, {}, 'rt1')*0.0174533,
      rotateZ1: number('rotate_Z1', rt_z1, {}, 'rt1')*0.0174533,

      translateX2: number('translate_X2', tr_x2, {}, 'tr2'),
      translateY2: number('translate_Y2', tr_y2, {}, 'tr2'),
      translateZ2: number('translate_Z2', tr_z2, {}, 'tr2'),

      rotateX2: number('rotate_X2', rt_x2, {}, 'rt2')*0.0174533,
      rotateY2: number('rotate_Y2', rt_y2, {}, 'rt2')*0.0174533,
      rotateZ2: number('rotate_Z2', rt_z2, {}, 'rt2')*0.0174533,
    }
  }), {
    notes: { markdown: markdownNotes }
    }
  )
;