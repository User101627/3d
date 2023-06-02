import React, { Suspense } from "react";
import {Canvas} from 'react-three-fiber'
import Auto from "./components/Auto/Auto";
import {OrbitControls} from '@react-three/drei'
// import { PointerLockControls } from 'https://threejs.org/examples/jsm/controls/PointerLockControls.js'
import Menu from "./components/Menu";
import "./menu.css";
import ThreeScene from './ThreeScene';


const Inicio = () => {
  return (
    <div id="inicio">
      <center>
      <h1>Taller de programacion avanzada ejemplo de un modelo 3D</h1>
      {/* <h2>Hector Lopez Lopez</h2> */}
      <h2><span class="badge bg-secondary">Mover ruedas: A-a</span></h2>
      <h2><span class="badge bg-secondary">Parar ruedas: S-s</span></h2>
      </center>
    </div>
  );
};

const Modelo3D = () => {
  return (
    <div id="modelo3d" style={{ height: "100vh" }}>
      <>
     {/* <Menu /> */}
   
   
     <div style={{ height: "100%" }}>
   {/* <div style={{width:'100%',height:'80vh'}}> */}
   <Canvas camera={{zoom:1,position:[15,20,15]}}>
    <ambientLight intensity={0.5}></ambientLight>
    <pointLight  position={[35,0,0]} intensity={0.3}/>
    <pointLight  position={[-35,0,0]} intensity={0.3}/>
    <pointLight position={[40,0,35]} intensity={0.3}/>
    <pointLight position={[-40,0,35]} intensity={0.3}/>
    <pointLight position={[0,0,0]} intensity={0.9}/>
    <pointLight position={[0,0,-20]} intensity={0.9}/>
    <pointLight position={[0,0,40]} intensity={0.9}/>
    <pointLight position={[0,0,-40]} intensity={0.9}/>
    <pointLight position={[30,0,-40]} intensity={0.9}/>
    <Suspense fallback={null}>
      {/* <PointerLockControls OrbitControls/> */}
    <Auto />
    </Suspense>
    <OrbitControls/>
   </Canvas>
   </div>

   
   </>
    </div>
  );
};
function App() {
  return (
    <>
      <Menu />
      <Inicio />
      <Modelo3D />
      <div style={{ width: '100%', height: '100vh' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
      <ThreeScene />
    </div>
    </div>
    </div>
    </div>
    
    </>
  );
}



export default App;