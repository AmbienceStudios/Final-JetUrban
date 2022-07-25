/* eslint-disable no-unused-vars */
import React from 'react';
import {MeshBuilder, ArcRotateCamera, HemisphericLight, Vector3, SceneLoader } from '@babylonjs/core';
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

       const camera = new ArcRotateCamera("camera", -Math.PI /2 , Math.PI / 2.5, 15, new Vector3(0,0,0));
       camera.attachControl(canvas, true);
      
        
            SceneLoader.Append("assets/Boxer/", "Boxer.glb", scene, function (scene) {   
                   
            scene.createDefaultCameraOrLight(true, true, true);
            scene.createDefaultEnvironment();
            
        });
    












   

    };

    return <SceneComponent onSceneReady={createScene} style = {myStyle} />

}

export default ReactCanvasSceneComponent