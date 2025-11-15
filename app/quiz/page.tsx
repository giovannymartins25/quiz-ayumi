"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const perguntas = [
  {
    pergunta: "O que eu mais gosto em você?",
    opcoes: ["Seu sorriso", "Seu jeitinho", "Seu cabelo", "Tudo"],
    correta: "Tudo",
  },
  {
    pergunta: "Se a gente fosse sair agora, qual seria o rolê perfeito?",
    opcoes: ["Pôr do sol", "Lanche juntos", "qualquer um", "Dormir abraçados"],
    correta: "qualquer um",
  },
  {
    pergunta: "Quando eu penso em você, o que sinto?",
    opcoes: ["Frio na barriga","é indescritível", "Sorriso bobo", "paz"],
    correta: "é indescritível",
  },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const router = useRouter();

  const perguntaAtual = perguntas[index];

  function responder(opcao: string) {
    if (opcao === perguntaAtual.correta) {
      setAcertos(acertos + 1);
    }

    if (index + 1 < perguntas.length) {
      setIndex(index + 1);
    } else {
      router.push(`/final?acertos=${acertos + (opcao === perguntaAtual.correta ? 1 : 0)}`);
    }
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-white p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.h2
        className="text-2xl font-bold text-pink-700 mb-6"
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {perguntaAtual.pergunta}
      </motion.h2>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        {perguntaAtual.opcoes.map((opcao) => (
          <motion.button
            key={opcao}
            onClick={() => responder(opcao)}
            className="bg-white/80 p-3 rounded-xl shadow text-pink-700 font-semibold hover:scale-105 transition"
            whileTap={{ scale: 0.9 }}
          >
            {opcao}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
