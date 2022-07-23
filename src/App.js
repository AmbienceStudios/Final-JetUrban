import * as THREE from "three/build/three.module.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



class App {
    constructor(){
        this.init();
        this.animate(); 
    }
    
    
    init(){
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio ); 
        this.renderer.shadowMap.enabled = true; 
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.autoClear = false;
        
        this.container = document.getElementById('container');
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.container.appendChild( this.renderer.domElement );

        this.aspect = this.container.clientWidth / this.container.clientHeight; 
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x555555 );
        
        this.camera = new THREE.PerspectiveCamera( 45, this.aspect, .1, 10000 );
        this.camera.position.set(0, 0, 300);
    
        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.enableZoom = true;
        this.controls.enabled = true;
        this.controls.target.set(0, 0, 0);
    
    //-------------------------------------------------------------------------------------------------
        
        var light = new THREE.AmbientLight(0xffffff); 
        this.scene.add(light);
        
      
        const loader = new GLTFLoader();
        loader.load("model/boxerWeb.glb", function(gltf){     
            this.scene.add(gltf.scene); 
        });
    
    
    }//end init
    
    
    animate(){
        requestAnimationFrame( this.animate.bind(this) );  
        this.render();
    }//end animate
    
    
    render(){
        
        this.controls.update();
        this.camera.updateMatrixWorld();
        this.camera.updateProjectionMatrix(); 
    
        this.renderer.render(this.scene, this.camera); 
    
    }//end render
    


}//end class


export default App;