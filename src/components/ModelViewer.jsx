import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const MuscleModel = (props) => {
    const meshRef = useRef();
    useFrame((state, delta) => (meshRef.current.rotation.y += delta * 0.5));
    return (
        <mesh {...props} ref={meshRef}>
            <capsuleGeometry args={[0.5, 2, 4, 8]} />
            <meshStandardMaterial color="#ef4444" roughness={0.3} />
        </mesh>
    );
};

const BoneModel = (props) => {
    const meshRef = useRef();
    useFrame((state, delta) => (meshRef.current.rotation.y += delta * 0.2));
    return (
        <mesh {...props} ref={meshRef}>
            <cylinderGeometry args={[0.3, 0.3, 3, 32]} />
            <meshStandardMaterial color="#f5f5f4" roughness={0.5} />
        </mesh>
    );
};

const LigamentModel = (props) => {
    const meshRef = useRef();
    useFrame((state, delta) => (meshRef.current.rotation.y += delta * 0.3));
    return (
        <mesh {...props} ref={meshRef}>
            <boxGeometry args={[0.2, 1.5, 0.05]} />
            <meshStandardMaterial color="#d1d5db" transparent opacity={0.8} />
        </mesh>
    );
};

const ModelViewer = ({ type }) => {
    const renderModel = () => {
        switch (type) {
            case 'Muscle':
                return <MuscleModel />;
            case 'Bone':
                return <BoneModel />;
            case 'Ligament':
                return <LigamentModel />;
            default:
                return <MuscleModel />;
        }
    };

    return (
        <div className="w-full h-[400px] bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
                <Stage environment="city" intensity={0.6}>
                    {renderModel()}
                </Stage>
                <OrbitControls autoRotate={false} />
            </Canvas>
        </div>
    );
};

export default ModelViewer;
