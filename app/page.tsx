"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-white text-center">
      <motion.h1
        className="text-4xl font-bold text-pink-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Oi amor 💗
      </motion.h1>

      <p className="text-lg text-pink-600 mb-8">
        Fiz um quiz especial pra você. Clica aqui pra começar 😳💞
      </p>

      <Link
        href="/quiz"
        className="bg-white/80 backdrop-blur p-4 px-6 rounded-xl shadow-md text-pink-700 font-semibold hover:scale-105 transition"
      >
        Começar o Quiz 💘
      </Link>

      {/* Corações subindo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="text-pink-400 absolute text-2xl"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: -200 }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </div>
  );
}
