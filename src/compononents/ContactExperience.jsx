import { Canvas } from "@react-three/fiber";
import { ContactBoy } from "../../public/models/ContactBoy";

const ContactExperience = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 35,
      }}
    >
      {/* Base lighting */}
      <ambientLight intensity={2} />

      {/* Blue light */}
      <directionalLight position={[-5, 5, 5]} intensity={5} color="#1C34FF" />

      {/* Pink light */}
      <directionalLight position={[5, 2, 3]} intensity={2} color="#FF28D5" />

      {/* Character */}
      <group rotation={[0, -0.5, 0]}>
        <ContactBoy scale={2.5} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
