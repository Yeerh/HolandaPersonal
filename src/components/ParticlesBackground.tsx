import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%", size: 8, delay: 0.1, duration: 3.8 },
  { left: "19%", top: "78%", size: 10, delay: 0.6, duration: 4.6 },
  { left: "32%", top: "28%", size: 6, delay: 0.9, duration: 4.2 },
  { left: "54%", top: "12%", size: 12, delay: 0.3, duration: 5.1 },
  { left: "68%", top: "34%", size: 7, delay: 0.5, duration: 4.7 },
  { left: "82%", top: "20%", size: 9, delay: 0.8, duration: 5.2 },
  { left: "76%", top: "74%", size: 12, delay: 0.2, duration: 4.5 },
  { left: "58%", top: "82%", size: 8, delay: 1.1, duration: 3.9 },
] as const;

export function ParticlesBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          animate={{ opacity: [0.15, 0.7, 0.15], y: [0, -18, 0], scale: [1, 1.15, 1] }}
          className="absolute rounded-full bg-[#ff6a00]"
          initial={{ opacity: 0.18 }}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow: "0 0 22px rgba(255,106,0,0.45)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: particle.delay,
            duration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
