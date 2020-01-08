[![GitHub repo](https://img.shields.io/github/stars/makimenko/angular-template-for-threejs?label=GitHub&style=social)](https://github.com/makimenko/angular-template-for-threejs) 
[![CI build status](https://github.com/makimenko/angular-template-for-threejs/workflows/CI/badge.svg?branch=master)](https://github.com/makimenko/angular-template-for-threejs/actions?query=workflow%3ACI+branch%3Amaster)
[![Greenkeeper badge](https://badges.greenkeeper.io/makimenko/angular-template-for-threejs.svg)](https://greenkeeper.io/)
[![Code coverage by codecov.io](https://codecov.io/gh/makimenko/angular-template-for-threejs/branch/master/graph/badge.svg)](https://codecov.io/gh/makimenko/angular-template-for-threejs)
[![npm version](https://badge.fury.io/js/atft.svg)](https://badge.fury.io/js/atft)
[![Storybook link](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg?sanitize=true)](https://makimenko.github.io/angular-template-for-threejs/storybook)


# Angular Template For Three.js (atft)

Leverage [Three.js](https://threejs.org) in your Angular app using simple components:

```html
<atft-orbit-controls [rotateSpeed]=1 [zoomSpeed]=1.2>
  <atft-renderer-canvas>
    <atft-perspective-camera
      [fov]=60 [near]=1 [far]=1100
      positionX=20 positionY=50 positionZ=50>
    </atft-perspective-camera>
    <atft-scene>
      <atft-axes-helper size=200></atft-axes-helper>
      <atft-grid-helper size=100 divisions=10></atft-grid-helper>
    </atft-scene>
  </atft-renderer-canvas>
</atft-orbit-controls>
```

## Storybook

*Explore provided Angular components in isolation!*

Click below to see the demo in a web browser:<br>
<a href="https://makimenko.github.io/angular-template-for-threejs/storybook">
<img src="https://raw.githubusercontent.com/makimenko/files/master/angular-template-for-threejs/images/storybook.gif">
</a>

## Goals of _this_ repo

- Implement npm [**atft**](https://www.npmjs.com/package/atft) library
  - Bindings for Three.js
  - SceneComponent with basic usage of scene, camera, lights, helpers, renderer
  - Integrated Three.js examples as components (e.g. OrbitControls, OBJLoader, ObjectLoader)
- Develop and test library components in isolation via [**Storybook**](https://makimenko.github.io/angular-template-for-threejs/storybook)

## Usage in your Angular project

1. Set up an Angular project and install dependencies:  
   `npm i three three.meshline atft --save`
2. Import library into your module:
   ```typescript
   import { AtftModule } from 'atft';
   ...
     imports: [
       ...
       AtftModule
     ]
    ...
   ```
3. Use atft library components in `src/app.app.component.html`:
    ```html
    <atft-orbit-controls [rotateSpeed]=1 [zoomSpeed]=1.2>
      <atft-renderer-canvas #mainRenderer>
        <atft-perspective-camera
          [fov]=60 [near]=1 [far]=1100
          positionX=20 positionY=50 positionZ=50>
        </atft-perspective-camera>
        <atft-scene>
          <atft-axes-helper size=200></atft-axes-helper>
          <atft-grid-helper size=100 divisions=10></atft-grid-helper>
        </atft-scene>
      </atft-renderer-canvas>
    </atft-orbit-controls>
    ```
4. (optionally) if you want to fit 3D scene canvas into entire screen (horizontally and vertically):

   in `src/styles.css`:
   ```css
    html, body {
        height: 100%;
        margin: 0;
    }  
    ```
   in `src/app/app.component.css`:
   ```css
    :host {
        height: 100%;
        display: flex;
    } 
    ```

## Development

See development related information on Git Hub repo:  
<https://github.com/makimenko/angular-template-for-threejs>

## Contributors

- [<img src="https://avatars0.githubusercontent.com/u/1827709?s=20"> ComFreek](https://github.com/ComFreek)
- [<img src="https://avatars1.githubusercontent.com/u/11466819?s=20"> makimenko](https://github.com/makimenko)
- Supported by [JetBrains](https://www.jetbrains.com/?from=AngularThreejsTemplateForDummies)

_Feel free to join us! Just submit your ideas via pull-requests :)_ 
