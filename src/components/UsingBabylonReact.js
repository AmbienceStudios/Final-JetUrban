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

        // const scene = new Scene(engine);
        const canvas = scene.getEngine().getRenderingCanvas();


        // MeshBuilder.CreateBox("box", {})

       const camera = new ArcRotateCamera("camera", -Math.PI /2 , Math.PI / 2.5, 15, new Vector3(0,0,0));
       camera.attachControl(canvas, true);
      

        // const light = new HemisphericLight("light", new Vector3(1,1,0));


         
            SceneLoader.Append("assets/Boxer/", "Boxer.glb", scene, function (scene) {   
                   
            scene.createDefaultCameraOrLight(true, true, true);
            scene.createDefaultEnvironment();
            
        });
    












        // return scene;

    };

    return <SceneComponent onSceneReady={createScene} style = {myStyle} />

}

export default ReactCanvasSceneComponent