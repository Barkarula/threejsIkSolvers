import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Component, Input, Output, OnInit, DoCheck, AfterContentInit,  
  OnChanges, SimpleChanges, SimpleChange,
  AfterContentChecked, AfterViewChecked, AfterViewInit
} from '@angular/core';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule, AnimationService} from 'atft';
//import {AtftModule} from '../../../projects/atft/src/lib/atft.module';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';
import {number, withKnobs} from '@storybook/addon-knobs';

// для обновления
// import '@storybook/addon-knobs/register'; 
// import { manager } from "@storybook/addon-knobs"
// import { manager } from '@storybook/addons-knob/dist/registerKnobs.js'
// addons/knobs/src/registerKnobs.js
// import '@storybook/addon-knobs'
// import {boolean, changeBoolean} from '@storybook/addon-knobs/react';
// import { updateKnob } from 'helpers';
// не работает
//  document.querySelectorAll("input[name='translate_X']")[0]
//  document.querySelectorAll("input[name='translate_X']")[0].getAttribute("value")
// document.querySelectorAll("input[name='translate_X']")[0].value = '10'
// const group = 'ContestCard ownership';
// import { withInfo } from '@storybook/addon-info';
// import { withConsole } from '@storybook/addon-console';

import markdownNotes from './x_objects-changes.stories.md';

// https://github.com/storybookjs/storybook/issues/3855
//import { manager } from '@storybook/addons-knob/dist/registerKnobs.js'
import { manager } from '@storybook/addon-knobs/dist/registerKnobs.js'
const { knobStore } = manager
            

// Initial state. 

let diffTrZ1 = 30;
let diffTrY1 = -10;
let diffRtZ1 = 0;
let diffTrZ2 = 60;
let diffTrY2 = 10;
let diffRtZ2 = 0;

let pzk = false;

    //console.log('THIS')
    //console.log(this)
    //console.log(@Component)
    //console.log(StorybookObjectMeshComponent)


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

  // @Input() console.log(this);

  // private _isReadonly: boolean = false;
  //@Input() set readonly(value: boolean) {
  //  this._isReadonly = typeof value === 'boolean' ? value : true;
  //}
  // ошибка дубликейт
  //@Input() set translateX(value: number) {
    // value = 8;
  //}
  // все норм
  //@Input('translateX') translateX1: number;
  //@Output('translateX') set translateX1(value: number) {
    //value = -18;
  //}

  //constructor() {
    //console.log(this)
  //}

  public translateX: number;
  // console.log('this123  !!!')
  // console.log(this)

  constructor(private animationService: AnimationService) {
  //constructor(private animationService: AnimationService, translateX: Number) {
    // console.log('this !!!')
    // console.log(this)
    // console.log(animationService)
    // this.translateX = translateX;

    // console.log(this.translateX)
    //console.log(manager)
    //console.log(this.translateZ2)
    this.animationService.start();
    //this.translateZ2 = 30;
  }

  ngOnInit() {
      
    // Вроде пригодиться 
    //console.log(`ngOnInit`);
    //console.log(this);
  }

  ngDoCheck() {

     // console.log(`ngDoCheck`);
     // console.log(this);
     // this.translateX = -10;
  }

  ngAfterContentInit() {
       
    // console.log(` AfterContentInit`);
    // console.log(this);
    // this.translateX = -10;
  }

  // !!!!
  ngAfterContentChecked() {
       
     // console.log(` AfterContentChecked`);
     // console.log(this);

    // 4. Триггер на проверку pzk
    if (pzk === true) {
      // this.translateZ = 10
    }

    //for (let propName in changes) {
      //console.log(changes);
      //console.log(propName);
    //}
  }

  // !!!
  ngAfterViewChecked() {
       
    //console.log(` AfterViewChecked`);
    //console.log(this);
    //this.translateX = -10;
  }

  ngAfterViewInit() {
       
    //console.log(`AfterViewInit`);
    //console.log(this);
  }
 
  ngOnDestroy() { 
    // console.log(`onDestroy`)
    // console.log(this)
  };
      //private log(msg: string) {
      //  console.log(msg);
    //}
     //ngOnInit() { console.log(`onInit`)};
    //ngOnChanges(changes: SimpleChanges) {
         //console.log(`onchanges`);
         //console.log(`onInit`);
    //}

    ngOnChanges(changes: SimpleChanges) {
       
      // this.log(`OnChanges`);
      console.log(`OnChanges`);
      // console.log(this);
      console.log(changes);
      // changes.previousValue = 10
      // changes.currentValue = 10

      for (let propName in changes) {
        let chng = changes[propName];
        // changes[propName]
      }


/*
      for (let propName in changes) {

        // !!!
        //console.log(changes);
        //console.log(changes[propName]);

        //if (changes === 'translateX') {
          //console.log('GOTCHA!');
        //}
        //if (changes.translateX.firstChange === false) {
          //console.log('GOTCHA!');
        //}
 
        //if (changes[propName].firstChange === false) {
          //console.log('GOTCHA! 2');
          //if ()
        //}

        if (changes[propName].firstChange === false) {
          console.log('GOTCHA! 2');
          console.log(this);
          console.log(Object.keys(changes)[0]);

          if (Object.keys(changes)[0] === 'translateX') {
            console.log('GOTCHA! 3');
            console.log(this);
            //console.log(this.translateZ2);
            //console.log(this.translateX);
            //this.translateZ2 = 100;
          }

          //if ( changes )
        }

        //translate_Z2 currentValue translateZ2
      }
      */

      let changesClone = changes; 

      for (let propName in changesClone) {

        if (changesClone[propName].firstChange === false) {
          console.log('GOTCHA! 2');
          console.log(Object.keys(changesClone)[0]);

          // 1. Считываем инициализированную переменную 
          console.log(diffRtZ2);

          if (Object.keys(changesClone)[0] === 'translateX') {
            console.log('GOTCHA! 3');
            console.log(this);
            //this.currentValue = 10;
            // changes.previousValue = 10
            // changes.currentValue = 10
            // this.previousValue = 10;
            // this.currentValue = 10;
            // changes[propName].previousValue = 10;
            // Schanges[propName].currentValue = 10;

            console.log(changes[propName]);
            // 3. Не работает
            //changes[propName].currentValue = 10;

            //var test : SimpleChange = this;
            console.log(changes);

            // 2. Считываем инициализированную переменную извне и меняем 
            // console.log(diffRtZ2);
            diffRtZ2 = 10;
            // console.log(diffRtZ2);

            // 5. В случае если двигаем translateX
            pzk = true;

            // 6. Меняем 'TRANS_X' 
            console.log('TRANS_X')
            console.log(TRANS_X)
            TRANS_X = -10
            console.log(TRANS_X)
            

            //manager.updateKnob(
              //'translateZ', // knobs property, example from above "Checked"
              //10, // new value to set programmatically, ex. true
            //)

            //window.__STORYBOOK_ADDONS.channel.emit('storybookjs/knobs/change', {
              //name: 'translateZ',
              //value: 'the_new_value'
            //})
          }
        }

        //translate_Z2 currentValue translateZ2
      }

    }
}

//console.log('test')
//console.log(test)
//console.log('THIS')
//console.log(StorybookObjectMeshComponent)
// console.log(StorybookObjectMeshComponent.ngOnInit())
// issue realization
// https://github.com/storybookjs/storybook/issues/3575
let TRANS_X = 10;
function funcTRANS_X() {
  return TRANS_X;
}
function funcTRANS_X1(func) {
  func();
}

/*
storiesOf('x_Objects-changes', module)
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
      tupa: function(){ 
        // console.log('HEHEH');
        // console.log(this)
       }(),
      translateX: number('translate_X', 0),
      translateY: number('translate_Y', 0),
      translateZ: number('translate_Z', 0),

      rotateX: number('rotate_X', 0)*0.0174533,
      rotateY: number('rotate_Y', 0,)*0.0174533,
      rotateZ: number('rotate_Z', 0,)*0.0174533,

      //translateX1: number('translate_X1', 0),
      //translateX1: TRANS_X,
      //translateX1: number('translate_X1', TRANS_X),
      //translateX1: () => { number('translate_X1', TRANS_X) },
      // translateX1: TRANS_X !== 10 ? number('translate_X1', 5) : number('translate_X1', -5),
      // ! Cделать
      //translateX: number('translate_X', 0, {}, 'e'),
      // translateX1: number('translate_X1', funcTRANS_X()),
      // translateX1: number('translate_X1', function test(){ return TRANS_X}()),
      //translateX1: number('translate_X1', funcTRANS_X1(function test(){ return TRANS_X})),
      translateX1: number('translate_X1', funcTRANS_X()),
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

// The name given to your knob - i.e:  `select("Checked", options, defaultValue)`
  // knobStore.store['translate_Y'].value = -9
// Danger zone! _mayCallChannel() triggers a re-render of the _whole_ knobs form.
  // manager._mayCallChannel()

            //console.log('123 123')
            //console.log(manager)
            //console.log(knobStore)
            //console.log(knobStore.store['translate_Y'])