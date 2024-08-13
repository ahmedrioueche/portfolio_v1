// components/Model.tsx
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model: React.FC = () => {
    const { scene } = useGLTF('/moon.glb');
    const scale = window.innerWidth < 768 ? 0.08 : 0.1;

    useFrame(({ clock }) => {
        scene.rotation.y = clock.getElapsedTime() * 0.2; // Rotate around Y-axis
        scene.rotation.x = clock.getElapsedTime() * 0.1; // Optional: rotate around X-axis
    });

    return (
        <primitive object={scene} scale={scale} position={[0, -2, 0]} />
    );
};

const ModelCanvas: React.FC = () => (
    <Canvas style={{ height: '400px', width: '100%' }} camera={{ position: [0, 30, 40], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model />
        <OrbitControls enableZoom={false} /> {/* Disable zoom */}
    </Canvas>
);

export default ModelCanvas;
