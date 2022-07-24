/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import {Engine, Scene} from '@babylonjs/core';
import React, {useEffect, useRef} from 'react';

export default (props) => {
    const reactCanvas = useRef(null);
    const {antialias, engineOpitons, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest} = props;
    
    useEffect(() => {
        if (reactCanvas.current){
            const engine = new Engine(reactCanvas.current, antialias, engineOpitons, adaptToDeviceRatio)
            const scene = new Scene(engine, sceneOptions)
            if (scene.isReady()){
                props.onSceneReady(scene)
            } else { 
                scene.onReadyObservable.addOnce((scene)=>props.onScreenReady(scene));
            }
      

        engine.runRenderLoop(()=> {
            if (typeof onRender === "function"){
                onRender(scene)
            }

            scene.render();
        })
        
        const resize = () => {
            scene.getEngine().resize();

        }

        if (window) {
            window.addEventListener("resize", resize)
        }

        return () => {
            
            scene.getEngine().dispose();

            if (window) {
                window.removeEventListener("resize",resize)
            }
        }


            }
    }, [reactCanvas])

    return <canvas ref={reactCanvas} {...rest} />;

}