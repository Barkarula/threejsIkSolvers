import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, DoCheck, OnChanges, SimpleChanges} from '@angular/core';
import {AtftModule} from 'atft';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {number, withKnobs} from '@storybook/addon-knobs';

import { manager } from '@storybook/addon-knobs/dist/registerKnobs.js'
const { knobStore } = manager

// Test
// import { Channel } from '@storybook/channels/dist/index.js'
// addons
// https://github.com/storybookjs/storybook/issues/3855
import {addons} from '@storybook/addons';

import markdownNotes from './pzk1.stories.md';
            

// Initial state 

let tr_x0 = 0;
let tr_y0 = 0;
let tr_z0 = 0;

let rt_x0 = 0;
let rt_y0 = 0;
let rt_z0 = 0;

  let tr_x1 = 20;
  let tr_y1 = 0;
  let tr_z1 = 0;

  let rt_x1 = 0;
  let rt_y1 = 0;
  let rt_z1 = -90;

let tr_x2 = 20;
let tr_y2 = 0;
let tr_z2 = 40;

let rt_x2 = 90;
let rt_y2 = 0;
let rt_z2 = 0;

  let tr_x3 = 20;
  let tr_y3 = 40;
  let tr_z3 = 40;

  let rt_x3 = 0;
  let rt_y3 = 0;
  let rt_z3 = 90;

let tr_x4 = 20;
let tr_y4 = 80;
let tr_z4 = 40;

let rt_x4 = 0;
let rt_y4 = 0;
let rt_z4 = 0;

  let tr_x5 = 20;
  let tr_y5 = 100;
  let tr_z5 = 40;

  let rt_x5 = 0;
  let rt_y5 = 0;
  let rt_z5 = 0;

let pzkMode = false;
let mutateState = false;

// Текущее значение обобщенных координат.

  //let cur_X1_tr1;
  //let cur_Z2_tr2;
  //let cur_X3_rt3;

  let cur_X1_tr1 = tr_x1;
  let cur_Z2_tr2 = tr_z2;
  let cur_X3_rt3 = tr_x3;

         function FixMeKnobUpdate(name, value) {

              // addons.getChannel().emit(CHANGE, { name, value });
              //addons.getChannel().emit(changes, { name, value });
          }

          export const emitter = (type, options) => addons.getChannel().emit(type, options);

export const updateKnob = (name, value) => (
  emitter("storybookjs/knobs/change", { name, value })
);


// ---------- Диапазон исследования: ----------

// constraints
// let rt_x3_cons = (Math.PI - 0.1)/2;
// let rt_x3_cons = ((Math.PI - 0.1)/2)*57.2958; // 87
let rt_x3_cons = 135; 

// ---------- Исходные данные: ----------


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
      <atft-sphere-mesh [radius]="4" [widthSegments]="20" [hightSegments]="20" material="phong" materialColor="0x00ff00">
      </atft-sphere-mesh>
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
      <atft-cylinder-mesh [radiusTop]="5.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="phong" materialColor="0x00ff00">
      </atft-cylinder-mesh>
      <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0x0000ff">
      </atft-torus-mesh>
            <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0xff0000" [rotateX]="90 | deg2rad">
      </atft-torus-mesh>
    </atft-empty>

    <atft-line-connector [source]="a" [target]="b" materialColor="0xff0000"></atft-line-connector>

    <atft-empty
        [translateX]="translateX2"
        [translateY]="translateY2"
        [translateZ]="translateZ2"
        [rotateX]="rotateX2"
        [rotateY]="rotateY2"
        [rotateZ]="rotateZ2"
        #d
        #e
    >
      <atft-cylinder-mesh [radiusTop]="5.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
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

    <atft-empty
        [translateX]="translateX3"
        [translateY]="translateY3"
        [translateZ]="translateZ3"
        [rotateX]="rotateX3"
        [rotateY]="rotateY3"
        [rotateZ]="rotateZ3"
        #e
        #f
    >
      <atft-cylinder-mesh [radiusTop]="7.0" [radiusBottom]="7.0" [height]="10" [radialSegments]="36" [heightSegments]="1"
                          material="phong" materialColor="0x00ff00">
      </atft-cylinder-mesh>
      <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0x0000ff">
      </atft-torus-mesh>
            <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0xff0000" [rotateX]="90 | deg2rad">
      </atft-torus-mesh>
    </atft-empty>

    <atft-line-connector [source]="d" [target]="e" materialColor="0xff0000"></atft-line-connector>

    <atft-empty
        [translateX]="translateX4"
        [translateY]="translateY4"
        [translateZ]="translateZ4"
        [rotateX]="rotateX4"
        [rotateY]="rotateY4"
        [rotateZ]="rotateZ4"
        #f
    >
      <atft-sphere-mesh [radius]="4" [widthSegments]="20" [hightSegments]="20" material="phong" materialColor="0x00ff00">
      </atft-sphere-mesh>
      <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0x0000ff">
      </atft-torus-mesh>
            <atft-torus-mesh [radius]="10" [tube]="1" [radialSegments]="16" [tubularSegments]="100" material="phong"
            materialColor="0xff0000" [rotateX]="90 | deg2rad">
      </atft-torus-mesh>
    </atft-empty>

    <atft-line-connector [source]="e" [target]="f" materialColor="0xff0000"></atft-line-connector>

    <atft-empty
        [translateX]="translateX5"
        [translateY]="translateY5"
        [translateZ]="translateZ5"
        [rotateX]="rotateX5"
        [rotateY]="rotateY5"
        [rotateZ]="rotateZ5"
    >
      <atft-sphere-mesh [radius]="4" [widthSegments]="20" [hightSegments]="20" material="phong" materialColor="0xff0000">
      </atft-sphere-mesh>
    </atft-empty>
  `)
})


class StorybookObjectMeshComponent implements OnChanges, DoCheck {


  // 2. Good choice for update state knobs
  ngDoCheck() {

  // По X:

  if (cur_X1_tr1 !== undefined) {

    // knobStore.store['translate_X2_tr2'].value = cur_X1_tr1;
    // knobStore.store['translate_X3_tr3'].value = cur_X1_tr1;
    // knobStore.store['translate_X4_tr4'].value = cur_X1_tr1;
  }

  // По Z: 

  if (cur_Z2_tr2 !== undefined) {

    // knobStore.store['translate_Z3_tr3'].value = cur_Z2_tr2;
  }

  // По Y: 

  if (cur_Z2_tr2 !== undefined) {

    //knobStore.store['translate_Z3_tr3'].value = cur_Z2_tr2;
  }

    // knobStore.store['translate_Z4_tr4'].value = cur_Z2_tr2 + Math.sin(cur_X3_rt3);
    // Math.round(cur_X3_rt3)

  if(mutateState)

    // Сбрасываем изменение;
    mutateState = false;

  }

ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {

      if (changes[propName].firstChange === false) {

        // Forward kinematick.
        // TODO: точно ли изменяется состояние стора после колбэка, а не по частям?
        // Первый ход холстой.
        // From the bottom up, recalculate the values for these values of the generalized coordinates.

        mutateState = true;

        // 1.Get Params chain, current value.

        // let cur_X1_tr1 = knobStore.store['translate_X1_tr1'].value;
        // let cur_Z2_tr2 = knobStore.store['translate_Z2_tr2'].value;
        // let cur_X3_rt3 = knobStore.store['rotate_X3_rt3'].value;

        // 2.Set params.

        // knobStore.store['translate_X2_tr2'].value = cur_X1_tr1;
        // knobStore.store['translate_X3_tr3'].value = cur_X1_tr1;
        // knobStore.store['translate_X4_tr4'].value = cur_X1_tr1;

        // knobStore.store['translate_Z3_tr3'].value = cur_Z2_tr2;
        // knobStore.store['translate_Z4_tr4'].value = cur_Z2_tr2 + Math.sin(cur_X3_rt3);

        // Плохой поход для работы через knobestore, так как записывается предыдущее стостояние knobs

        // let cur_X1_tr1;
        // let cur_Z2_tr2;
        // let cur_X3_rt3;

              //console.log('HTE')
              //console.log(changes)
              //console.log(knobStore)
              //console.log(cur_X1_tr1)
              //console.log(cur_Z2_tr2)
              //console.log(cur_X3_rt3)

        // 1.Get Params chain, current value.
      
        if (Object.keys(changes)[0] === 'translateX1') {
          
          //console.log('x1')
          //console.log(changes['translateX1'].currentValue);

          if (changes['translateX1'].currentValue !== undefined) {

            cur_X1_tr1 = changes['translateX1'].currentValue
          }
        }

        if (Object.keys(changes)[0] === 'translateZ2') {
          
          //console.log('z2')
          //console.log(changes['translateZ2'].currentValue);

          if (changes['translateZ2'].currentValue !== undefined) {

            cur_Z2_tr2 = changes['translateZ2'].currentValue;
          }
        }

        if (Object.keys(changes)[0] === 'rotateX3') {
          
          //console.log('x3')
          //console.log(changes['rotateX3'].currentValue);

          if (changes['rotateX3'].currentValue !== undefined) {

            cur_X3_rt3 = changes['rotateX3'].currentValue * 57.2958;
            cur_X3_rt3 = Math.round(cur_X3_rt3);
          }
        }

          // !!!
          //console.log('HTE 2')
          //console.log(knobStore)
          //console.log(manager)
          //console.log(manager.channel)
          //console.log('addons')
          //console.log(addons)

          // console.log(addons.getChannel().emit(CHANGE, { 'translate_X3_tr3', 24 }))
          // console.log(addons.getChannel().emit(changes, { translate_X3_tr3, 24 }))
          // addons.getChannel()
          // addons.getChannel().emit(CHANGE, { 'translate_X3_tr3', 24 });

          //console.log(cur_X1_tr1);
          //console.log(cur_Z2_tr2);
          //console.log(cur_X3_rt3);

          //updateKnob('translate_X3_tr3', 24);

        // 2.Set params.

        let updateState = function(q1, q2, q3) {

          // По Z: 

          if (q1 !== undefined) {

            //knobStore.store['translate_X2_tr2'].value = q1;
            //knobStore.store['translate_X3_tr3'].value = q1;
            //knobStore.store['translate_X4_tr4'].value = q1;

            updateKnob('translate_X2_tr2', q1);
            updateKnob('translate_X3_tr3', q1);
            updateKnob('translate_X4_tr4', q1);
          }


          // По Z:

          if (q2 !== undefined || q3 !== undefined) {

            //knobStore.store['translate_Z3_tr3'].value = q2;
            //knobStore.store['translate_Z4_tr4'].value = q2 + Math.sin(q3);

            // угол в радианы перевести
            // https://www.google.com/search?sxsrf=ACYBGNQ4z5xWVr1Hp3K6-ZsPKhicmJRPkg%3A1581714564672&ei=hAxHXqjRKMKrrgSb9YW4CA&q=%D1%83%D0%B3%D0%BE%D0%BB+%D0%B2+%D1%80%D0%B0%D0%B4%D0%B8%D0%B0%D0%BD%D1%8B+%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D1%82%D0%B8&oq=%D1%83%D0%B3%D0%BB%D1%8B+%D0%B2+%D1%80%D0%B0%D0%B4%D0%B8%D0%B0%D0%BD%D1%8B+%D0%BF%D0%B5&gs_l=psy-ab.3.0.0i22i30l6.31510.32738..34679...0.2..0.132.313.1j2......0....1..gws-wiz.......0i71j35i39.5ZQMbHESngg

            console.log('HIHI')
            console.log(q2)
            console.log(q3)
            q3 = q3 * 0.0174533;

            console.log('cos')
            console.log(Math.cos(q3))
            console.log(Math.cos(q3)*40)

            console.log('sin')
            console.log(Math.sin(q3))
            console.log(Math.sin(q3)*40)

            // console.log(q2 - (Math.sin(q3))*40)
            // console.log(Math.round(q2 + Math.sin(q3)))

            let translate_z_4 = Math.round(q2 - (Math.sin(q3))*40);

            updateKnob('translate_Z3_tr3', q2);
            updateKnob('translate_Z4_tr4', translate_z_4);
          }


          // По Y:

          if (q3 !== undefined) {

            //q3 = q3 * 0.0174533;

            console.log('move y')
            console.log((Math.cos(q3))*40)
            console.log(tr_y3 + (Math.cos(q3))*40)
            console.log(Math.round(tr_y3 + (Math.cos(q3))*40))

            let translate_y_4 = Math.round(tr_y3 + (Math.cos(q3))*40);

            console.log(translate_y_4)

            updateKnob('translate_Y4_tr4', translate_y_4);
          }

        }

        updateState(cur_X1_tr1, cur_Z2_tr2, cur_X3_rt3);
      }
    }
  };
};


storiesOf('Pzk', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('2.Forward kinematicks ', () => ({ 
    component: StorybookObjectMeshComponent,
    props: {

      // bazis (0.0.0)
      translateX: number('translate_X', tr_x0, {range: false, min: -25, max: 25, step: 1}, 'tr0'),
      translateY: number('translate_Y', tr_y0, {range: false, min: -25, max: 25, step: 1}, 'tr0'),
      translateZ: number('translate_Z', tr_z0, {range: false, min: -25, max: 25, step: 1}, 'tr0'),

      rotateX: number('rotate_X', rt_x0, {range: false, min: 0, max: 360, step: 1}, 'rt0')*0.0174533,
      rotateY: number('rotate_Y', rt_y0, {range: false, min: 0, max: 360, step: 1}, 'rt0')*0.0174533,
      rotateZ: number('rotate_Z', rt_z0, {range: false, min: 0, max: 360, step: 1}, 'rt0')*0.0174533,


      // 1.Chain
      translateX1: number('translate_X1', tr_x1, {range: false, min: 20, max: 120, step: 1}, 'tr1'),        // @
      translateY1: number('translate_Y1', tr_y1, {range: false, min: -75, max: 75, step: 1}, 'tr1'),
      translateZ1: number('translate_Z1', tr_z1, {range: false, min: -75, max: 75, step: 1}, 'tr1'),

      rotateX1: number('rotate_X1', rt_x1, {range: false, min: 0, max: 360, step: 1}, 'rt1')*0.0174533,
      rotateY1: number('rotate_Y1', rt_y1, {range: false, min: 0, max: 360, step: 1}, 'rt1')*0.0174533,
      rotateZ1: number('rotate_Z1', rt_z1, {range: false, min: 0, max: 360, step: 1}, 'rt1')*0.0174533,


      // 2.Chain
      translateX2: number('translate_X2', tr_x2, {range: false, min: -75, max: 75, step: 1}, 'tr2'),
      translateY2: number('translate_Y2', tr_y2, {range: false, min: -75, max: 75, step: 1}, 'tr2'),
      translateZ2: number('translate_Z2', tr_z2, {range: false, min: 20, max: 120, step: 1}, 'tr2'),        // @

      rotateX2: number('rotate_X2', rt_x2, {range: false, min: 0, max: 360, step: 1}, 'rt2')*0.0174533,
      rotateY2: number('rotate_Y2', rt_y2, {range: false, min: 0, max: 360, step: 1}, 'rt2')*0.0174533,
      rotateZ2: number('rotate_Z2', rt_z2, {range: false, min: 0, max: 360, step: 1}, 'rt2')*0.0174533,


      // 3.Chain
      translateX3: number('translate_X3', tr_x3, {range: false, min: -75, max: 75, step: 1}, 'tr3'),
      translateY3: number('translate_Y3', tr_y3, {range: false, min: -75, max: 75, step: 1}, 'tr3'),
      translateZ3: number('translate_Z3', tr_z3, {range: false, min: 20, max: 120, step: 1}, 'tr3'),

      rotateX3: number('rotate_X3', rt_x3, {range: false, min: -90, max: rt_x3_cons , step: 1}, 'rt3')*0.0174533,       // @
      rotateY3: number('rotate_Y3', rt_y3, {range: false, min: 0, max: 360, step: 1}, 'rt3')*0.0174533,
      rotateZ3: number('rotate_Z3', rt_z3, {range: false, min: 0, max: 360, step: 1}, 'rt3')*0.0174533,


      // 4.Chain
      translateX4: number('translate_X4', tr_x4, {range: false, min: -120, max: 120, step: 1}, 'tr4'),
      translateY4: number('translate_Y4', tr_y4, {range: false, min: -120, max: 120, step: 1}, 'tr4'),
      translateZ4: number('translate_Z4', tr_z4, {range: false, min: 20, max: 120, step: 1}, 'tr4'),

      rotateX4: number('rotate_X4', rt_x4, {range: false, min: 0, max: 360, step: 1}, 'rt4')*0.0174533,
      rotateY4: number('rotate_Y4', rt_y4, {range: false, min: 0, max: 360, step: 1}, 'rt4')*0.0174533,
      rotateZ4: number('rotate_Z4', rt_z4, {range: false, min: 0, max: 360, step: 1}, 'rt4')*0.0174533,

      // 5.End Poin
      translateX5: number('translate_X5', tr_x5, {range: false, min: -120, max: 120, step: 1}, 'tr5'),
      translateY5: number('translate_Y5', tr_y5, {range: false, min: -120, max: 120, step: 1}, 'tr5'),
      translateZ5: number('translate_Z5', tr_z5, {range: false, min: 20, max: 120, step: 1}, 'tr5'),

      rotateX5: number('rotate_X5', rt_x5, {range: false, min: 0, max: 360, step: 1}, 'rt5')*0.0174533,
      rotateY5: number('rotate_Y5', rt_y5, {range: false, min: 0, max: 360, step: 1}, 'rt5')*0.0174533,
      rotateZ5: number('rotate_Z5', rt_z5, {range: false, min: 0, max: 360, step: 1}, 'rt5')*0.0174533,
    }
  }), {
    notes: { markdown: markdownNotes }
    }
  )
;

//  document.querySelectorAll('[name=translate_X_tr0]')[0].parentNode.style.display = 'none';