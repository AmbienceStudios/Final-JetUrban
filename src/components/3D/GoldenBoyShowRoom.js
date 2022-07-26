/* eslint-disable no-unused-vars */
import React from 'react';
import { ArcRotateCamera, Vector3, SceneLoader, Color3  } from '@babylonjs/core';
import SceneComponent from './SceneComponent';
import '@babylonjs/loaders';

const myStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: "90%",
    height: "100vh",

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
            
            var environment =  scene.createDefaultEnvironment({ 
                createSkybox: true,
                   skyboxSize: 150,
                   skyboxColor: Color3.Black(),
                createGround: true,
                groundSize: 1000,
                groundColor: Color3.Gray(),
                enableGroundShadow: true, 
                groundYBias: 1 
        });
            
        });
    
   
  

    };

    return <SceneComponent onSceneReady={createScene} style = {myStyle} />

}

export default ReactCanvasSceneComponent