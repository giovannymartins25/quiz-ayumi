"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Final() {
  const [acertos, setAcertos] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setAcertos(params.get("acertos"));
    }
  }, []);

  if (acertos === null) {
    return (
      <div className="flex items-center justify-center min-h-screen text-pink-600 text-xl">
        Carregando...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-white text-center p-6 relative">
      
      <motion.h1
        className="text-4xl font-bold text-pink-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Parabéns minha princesa 💗
      </motion.h1>

      <p className="text-lg text-pink-600 mb-2">
        Você acertou <span className="font-bold">{acertos}</span> perguntas 🥺
      </p>

      <p className="text-xl text-pink-700 mt-4 mb-10">
        Mas pra mim você sempre acerta tudo sobre nós 💞  
        <br />Eu amo muito você, minha Japa ❤️‍🩹
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition"
        >
          Jogar de novo 🔁
        </Link>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="text-pink-400 absolute text-2xl"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: -300 }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            💗
          </motion.div>
        ))}
      </div>
    </div>
  );
}
