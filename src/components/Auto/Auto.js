import React, { useRef, useEffect, useState } from 'react';
// import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


export default function Auto(props) {
  const { nodes, materials } = useGLTF('/auto.gltf');
  const wheel1Ref = useRef();
  const wheel2Ref = useRef();
  const [rotateWheels, setRotateWheels] = useState(false);

/*   useFrame(() => {
    const rotationSpeed = 0.01; // Velocidad de rotación de las ruedas
    if (wheel1Ref.current && wheel2Ref.current) {
    // Actualizar la rotación de las ruedas
    wheel1Ref.current.rotation.x += rotationSpeed;
    wheel2Ref.current.rotation.x += rotationSpeed;
    }
    // ... otras ruedas
  }); */
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'a' || event.key === 'A') {
        setRotateWheels(true);
      } else if (event.key === 's' || event.key === 'S') {
        setRotateWheels(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  useFrame(() => {
    const rotationSpeed = 100; // Velocidad de rotación de las ruedas
    if (rotateWheels && wheel1Ref.current && wheel2Ref.current) {
      // Actualizar la rotación de las ruedas
      wheel1Ref.current.rotation.x += rotationSpeed;
      wheel2Ref.current.rotation.x += rotationSpeed;
    }
    // ... otras ruedas
  });


  return (
    <group {...props} dispose={null}>
      <group position={[0.005, 0.629, 0.003]} rotation={[Math.PI1 / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]}>
        <mesh geometry={nodes.Object_16.geometry} material={materials['51415']}  />
        <mesh geometry={nodes.Object_17.geometry} material={materials['2425']}  />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Vt_Liu.003']} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.material_1} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.material_2} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.material_3} position={[2.694, 1.301, -4.611]} rotation={[Math.PI / 2, 0, 0]} ref={wheel1Ref} scale={[-3.629, 3.629, 3.629]} /> //LLanta trasera
      <mesh geometry={nodes.Object_12.geometry} material={materials.material_4} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]}   scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.material_5} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.material_9} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.material_10} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.material_11} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_26.geometry} material={materials['2425']} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.material_12} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_30.geometry} material={materials['1011121326']} position={[2.694, 1.301, -5.182]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.629, 3.629, 3.629]} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.material_14} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.material_15} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.material_16} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_38.geometry} material={materials['51415']} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_40.geometry} material={materials['2023']} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_42.geometry} material={materials['2425']} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_44.geometry} material={materials['1011121326']} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_46.geometry} material={materials['2023']} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_48.geometry} material={materials['51415']} position={[0.005, 0.629, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.294, 3.294, 3.294]} />
      <mesh geometry={nodes.Object_50.geometry} material={materials['1011121326']} position={[2.694, 1.301, -5.182]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.629, 3.629, 3.629]} />
      <mesh geometry={nodes.Object_52.geometry} material={materials.material_3} position={[2.581, 1.216, 4.578]} rotation={[Math.PI / 2, 0, 0]} ref={wheel2Ref} scale={[-3.268, 3.378, 3.378]} />// Llanta delantera
      <mesh geometry={nodes.Object_54.geometry} material={materials['1011121326']} position={[2.694, 1.216, 4.006]} rotation={[Math.PI / 2, 0, 0]}  scale={[-3.378, 3.378, 3.378]} />
      <mesh geometry={nodes.Object_56.geometry} material={materials['1011121326']} position={[2.694, 1.216, 4.006]} rotation={[Math.PI / 2, 0, 0]} scale={[-3.378, 3.378, 3.378]} />
    </group>
  )
}

useGLTF.preload('/auto.gltf')