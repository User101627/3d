import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Configuración de la escena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Creación del suelo
    const geometry = new THREE.PlaneGeometry(10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const floor = new THREE.Mesh(geometry, material);
    scene.add(floor);

    // Posicionamiento de la cámara
    camera.position.z = 5;

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);
      floor.rotation.x += 0.01;
      floor.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Limpieza
    return () => {
      scene.remove(floor);
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default ThreeScene;
