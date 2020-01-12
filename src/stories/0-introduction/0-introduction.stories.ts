import {moduleMetadata, storiesOf} from '@storybook/angular';
// NOTE: Do direct import instead of library (allows to watch component and easy to develop)
import {AtftModule} from 'atft';
import {select, text, withKnobs} from '@storybook/addon-knobs';
import {Component} from '@angular/core';
import {axesSceneWrapper} from '../scene-wrapper/axes-scene-wrapper';

import markdownNotes from './introduction.stories.md';


@Component({
  template: axesSceneWrapper(`
  <atft-text-mesh [translateX]="-30" [text]="text" [rotateZ]="(90 | deg2rad)" material="phong" [materialColor]="materialColor"
      [bevelEnabled]="true" curveSegments="20" [centered]="true">
  </atft-text-mesh>`)
})
class StorybookTextMeshComponent {

}


storiesOf('Introduction', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [
        AtftModule
      ]
    }),
  )
  .add('intro', () => ({
    component: StorybookTextMeshComponent,
    props: {
      text: text('text', 'Introduction \n open notes* '),
      materialColor: select('materialColor', ['0xff0000', '0x00ff00', '0x0000ff'], '0x0000ff')
    }
  }), {
    notes: { markdown: markdownNotes }
    })
;