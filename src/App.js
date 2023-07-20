import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

function App() {
  return (
    <>
      <div>Outside Canvas</div>
      <Canvas>
        <Sky sunPosition={[100, 200, 20]} />
        <ambientLight intensity={0.5} />
        <Physics>
          
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
