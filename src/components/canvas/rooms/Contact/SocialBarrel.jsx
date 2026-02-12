import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const SocialBarrel = ({ position, rotation = [0, 0, 0], texturePath, onClick, scale = [2.3, 2.3] }) => {
    const meshRef = useRef();
    // Load texture based on prop. 
    // Note: If you change the texture on the fly, this might suspend. 
    // Ideally textures are preloaded or consistent.
    const texture = useTexture(texturePath);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.getElapsedTime();

            // Synced with sea waves (speed ~0.8, amp ~0.15)
            // Added random phase offset based on x position to prevent them continuously bobbing in perfect unison
            const phaseOffset = position[0] * 0.5;
            meshRef.current.position.y = position[1] + Math.sin(time * 0.8 + phaseOffset) * 0.15;

            // Horizontal drift (gentle left/right)
            meshRef.current.position.x = position[0] + Math.sin(time * 0.4 + phaseOffset) * 0.2;

            // Gentle rotation drift
            meshRef.current.rotation.z = rotation[2] + Math.sin(time * 0.6 + phaseOffset) * 0.05;

            // Hover scale
            const targetScale = hovered ? 1.1 : 1;
            // Apply base scale * hover factor
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, 1), 0.1);
        }
    });

    return (
        <mesh
            ref={meshRef}
            position={position}
            rotation={rotation}
            onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
            }}
            onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(true); }}
            onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(false); }}
        >
            <planeGeometry args={scale} />
            <meshBasicMaterial
                map={texture}
                transparent={true}
                alphaTest={0.5}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

export default SocialBarrel;
