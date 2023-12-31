import { Stats, OrbitControls, Environment } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function App() {
  const gltf = useLoader(GLTFLoader, './models/monkey.glb');

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }}>
      <Environment files={'./img/venice_sunset_4k.hdr'} background blur={0.2} />
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      <primitive object={gltf.scene} position={[0, 1, 0]} />
      <OrbitControls target={[0, 1, 0]} autoRotate={false} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  );
}
