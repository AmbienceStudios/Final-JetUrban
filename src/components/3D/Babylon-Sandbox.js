import React, {useRef, useEffect} from 'react'

import { Engine, Scene, MeshBuilder, ArcRotateCamera, HemisphericLight, Vector3 } from '@babylonjs/core'




// Make a copy of the code of this js page 
// & rename "ReactCanvas" to the canvas name 
// you want it to be



// This is to create the size of the canvas in the div.
const myStyle = {
    width: "100%",
    height: "100%"
}


// Let's build the code for the canvas
const ReactCanvas = props => {

    var canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current 
        const engine = new Engine(canvas, true);


// Creating a Scene function        
    const createScene = function () {

        // Creating the scene 
        const scene = new Scene(engine);

        // Rendering a Box ( Add other mesh items or 3D models in this section)
        MeshBuilder.CreateBox("box", {})









        // Creating the camera
        const camera = new ArcRotateCamera("camera", -Math.PI /2 , Math.PI / 2.5, 15, new Vector3(0,0,0));
        camera.attachControl(canvas, true);

        // Creating a Light
        const light = new HemisphericLight("light", new Vector3(1,1,0));

        // Exporting the Scene
        return scene;

    };

    // Import Scene created above
    const scene = createScene();

    // Renders every keyframe
    engine.runRenderLoop(function () {
        scene.render();

    });

    // Responsive to device ratios
    window.addEventListener("resize", function () {
        engine.resize();
    });


    },[])



// imports everything into a Canvas
return <canvas style={myStyle} ref={canvasRef} {...props}></canvas>


}

// Put's it all into this function tag.
export default ReactCanvas

// This will be imported to a js page. 

// Referenced like this:

// import ReactCanvas from './3D/babylon-Sandbox.js' 

// Then called within the div as <ReactCanvas/> 




