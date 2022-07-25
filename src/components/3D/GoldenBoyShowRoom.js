/* eslint-disable no-unused-vars */
import React from 'react';
import { ArcRotateCamera, Vector3, SceneLoader, CubeTexture  } from '@babylonjs/core';
import SceneComponent from './SceneComponent';
import '@babylonjs/loaders';

const myStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: "90%",
    height: "100%"
}


const ReactCanvasSceneComponent = props => {

const createScene = function (scene) {

 
       const canvas = scene.getEngine().getRenderingCanvas();
   

       const  camera = new ArcRotateCamera("Camera", 0, 0, 3, Vector3.Zero(), scene);
       camera.setTarget(Vector3.Zero());
       camera.attachControl(canvas, true);
    //    camera.target.y = 0;


            // var hdrTexture = CubeTexture.CreateFromPrefilteredData("/assets/gym.hdr", scene)
            // var currentSkybox = scene.createDefaultSkybox(hdrTexture, true)


        
            SceneLoader.Append("assets/Boxer/", "Boxer.glb", scene, function (scene) {  
                          
            scene.createDefaultCameraOrLight(true, true, true);
            scene.createDefaultEnvironment();
    

            
        });
    
   
  

    };

    return <SceneComponent onSceneReady={createScene} style = {myStyle} />

}

export default ReactCanvasSceneComponent