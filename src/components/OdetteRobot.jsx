import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";

function Robot() {
  const head = useRef();
  const body = useRef();
  const leftEye = useRef();
  const rightEye = useRef();
  const antennaGlow = useRef();

  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  const hasSpoken = useRef(false);

  // =========================
  // 🎙️ CLEAN FEMALE AI VOICE
  // =========================
  const speak = (text) => {
    if (!("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);

    // 👩 more natural female AI tone
    utterance.volume = 1;
    utterance.rate = 0.95;   // smoother, less robotic
    utterance.pitch = 1.35;  // higher = softer female tone

    const loadVoice = () => {
      const voices = window.speechSynthesis.getVoices();

      const preferredVoice =
        voices.find((v) =>
          v.lang === "en-US" &&
          (
            v.name.toLowerCase().includes("samantha") ||
            v.name.toLowerCase().includes("zira") ||
            v.name.toLowerCase().includes("google") ||
            v.name.toLowerCase().includes("aria") ||
            v.name.toLowerCase().includes("female")
          )
        ) ||
        voices.find((v) => v.lang === "en-US") ||
        voices[0];

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    };

    const voices = window.speechSynthesis.getVoices();

    if (voices.length === 0) {
      window.speechSynthesis.onvoiceschanged = loadVoice;
    } else {
      loadVoice();
    }
  };

  // =========================
  // 🧠 SPEECH TRIGGER (SAFE)
  // =========================
  useEffect(() => {
    const triggerSpeak = () => {
      if (hasSpoken.current) return;

      speak(
        "Welcome. I am Odette, your AI assistant. How can I help you today?"
      );

      hasSpoken.current = true;
    };

    const onFirstInteraction = () => {
      triggerSpeak();

      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };

    window.addEventListener("click", onFirstInteraction);
    window.addEventListener("scroll", onFirstInteraction);
    window.addEventListener("keydown", onFirstInteraction);

    return () => {
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);

  // =========================
  // 🖱️ MOUSE TRACKING
  // =========================
  useEffect(() => {
    const move = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    smooth.current.x = THREE.MathUtils.lerp(
      smooth.current.x,
      mouse.current.x,
      0.05
    );

    smooth.current.y = THREE.MathUtils.lerp(
      smooth.current.y,
      mouse.current.y,
      0.05
    );

    // HEAD
    if (head.current) {
      head.current.rotation.y = smooth.current.x * 0.6;
      head.current.rotation.x = -smooth.current.y * 0.3;
      head.current.position.y = 0.7 + Math.sin(t * 2.8) * 0.08;
    }

    // BODY
    if (body.current) {
      body.current.position.y = -1.3 + Math.sin(t * 1.5) * 0.05;
      body.current.rotation.y = Math.sin(t * 0.6) * 0.05;
    }

    // EYES
    const pulse = 1 + Math.sin(t * 4) * 0.06;

    if (leftEye.current && rightEye.current) {
      leftEye.current.scale.set(pulse, pulse * 0.7, pulse);
      rightEye.current.scale.set(pulse, pulse * 0.7, pulse);
    }

    // ANTENNA
    if (antennaGlow.current) {
      const glowPulse = 1 + Math.sin(t * 6) * 0.25;
      antennaGlow.current.scale.set(glowPulse, glowPulse, glowPulse);
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={1.6}>
      <group scale={1.4}>

        <group ref={head} position={[0, 0.7, 0]}>

          {/* WHITE HEAD */}
          <RoundedBox args={[2.2, 1.8, 1.8]} radius={0.2} smoothness={6}>
            <meshStandardMaterial
              color="#f7f7f7"
              metalness={0.25}
              roughness={0.4}
            />
          </RoundedBox>

          {/* RED FACE SCREEN */}
          <mesh position={[0, 0, 0.92]}>
            <planeGeometry args={[1.6, 1.2]} />
            <meshStandardMaterial
              color="#0a0a0a"
              emissive="#ff0000"
              emissiveIntensity={0.35}
            />
          </mesh>

          {/* EYES */}
          <mesh ref={leftEye} position={[-0.35, 0.12, 0.95]}>
            <circleGeometry args={[0.14, 32]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ff0000"
              emissiveIntensity={2}
            />
          </mesh>

          <mesh ref={rightEye} position={[0.35, 0.12, 0.95]}>
            <circleGeometry args={[0.14, 32]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ff0000"
              emissiveIntensity={2}
            />
          </mesh>

          {/* MOUTH */}
          <mesh position={[0, -0.28, 0.9]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.3, 0.03, 10, 24, Math.PI]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ff0000"
              emissiveIntensity={1.5}
            />
          </mesh>

          {/* ANTENNA */}
          <mesh position={[0, 1.1, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.9]} />
            <meshStandardMaterial
              color="#eaeaea"
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>

          {/* ANTENNA GLOW CORE */}
          <mesh position={[0, 1.6, 0]} ref={antennaGlow}>
            <sphereGeometry args={[0.09, 32, 32]} />
            <meshStandardMaterial
              color="#ff0000"
              emissive="#ff0000"
              emissiveIntensity={3}
            />
          </mesh>

          {/* HALO */}
          <mesh position={[0, 1.6, 0]}>
            <sphereGeometry args={[0.18, 32, 32]} />
            <meshBasicMaterial
              color="#ff0000"
              transparent
              opacity={0.2}
            />
          </mesh>

          {/* LIGHT */}
          <pointLight
            position={[0, 1.6, 0]}
            intensity={3}
            color="#ff0000"
            distance={4}
          />

        </group>
      </group>
    </Float>
  );
}

export default function OdetteRobot() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-[650px] h-[520px]">

<Canvas camera={{ position: [0, 0, 6.5] }}>
  <Suspense fallback={null}>

    <ambientLight intensity={1.2} />

    <directionalLight
      position={[5, 5, 5]}
      intensity={1.5}
      color="#ffffff"
    />

    <pointLight
      position={[0, 2, 3]}
      intensity={0.6}
      color="#ff0000"
    />

    <Robot
      position={[100, 5, 100]}
      scale={10}
    />

  </Suspense>
</Canvas>

      </div>
    </div>
  );
}