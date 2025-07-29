import { useState } from "react";

const faqs = [
  {
    question: "Qual é o prazo médio para entrega de um projeto?",
    answer:
      "O prazo varia conforme o tipo de projeto, mas em média levo de 1 a 4 semanas. Projetos mais simples podem ser entregues em poucos dias, e os mais complexos em até 8 semanas.",
  },
  {
    question: "Você reformula sites antigos ou só cria do zero?",
    answer:
      "Sim, também reformulo sites antigos! Posso modernizar o visual, melhorar o desempenho e atualizar a estrutura sem precisar criar tudo do zero — a escolha depende do que for mais eficiente para seu projeto.",
  },
  {
    question: "Vou poder acompanhar o desenvolvimento do projeto?",
    answer:
      " Com certeza! Mantenho você informado em cada etapa, com atualizações regulares, prévias do progresso e espaço para feedback. Acompanhar o desenvolvimento faz parte do processo.",
  },
  {
    question: "Você oferece suporte depois da entrega?",
    answer:
      "Sim! Após a entrega, ofereço suporte por um período determinado para ajustes, dúvidas ou pequenas correções. Também posso criar um plano de manutenção contínua, se desejar.",
  },
  {
    question: "O que está incluso na parte de segurança?",
    answer:
      "Implemento camadas de proteção contra ataques comuns, realizo backups regulares, configuro certificados SSL e aplico medidas para blindar vulnerabilidades. Tudo isso para garantir mais segurança, tranquilidade e confiança para você e seus clientes.",
  },
  {
    question: "Quais tecnologias você utiliza nos projetos?",
    answer:
      "Utilizo tecnologias modernas e robustas como Laravel (PHP), Ruby on Rails e frameworks front-end atuais para criar interfaces responsivas. Trabalho com bancos de dados como PostgreSQL e MongoDB, além de integrar APIs para garantir projetos rápidos, escaláveis e funcionais.",
  },
  {
    question: "Posso solicitar alterações após a entrega do projeto?",
    answer:
      "Sim! Após a entrega, você pode solicitar ajustes pontuais dentro do período de suporte incluído. Caso precise de mudanças maiores ou novas funcionalidades, posso orçar à parte ou incluir em um plano de manutenção contínua.",
  },
  {
    question: "Vocês oferecem treinamento para usar o sistema?",
    answer:
      "Sim! Ofereço treinamento prático após a entrega, com orientações claras sobre como usar o sistema, atualizar conteúdos e gerenciar funções principais. Pode ser feito por vídeo, documentação personalizada ou chamada ao vivo — conforme sua preferência.",
  },
  {
    question: "E se eu não gostar do resultado final?",
    answer:
      "Meu foco é garantir sua satisfação, por isso você acompanha o projeto durante todo o processo e pode solicitar ajustes. Se algo não estiver como imaginado, realizo as correções necessárias dentro do escopo combinado — sempre com diálogo aberto e transparência para chegarmos ao melhor resultado possível.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:shadow-md ${
              openIndex === index ? "bg-lime-300" : "bg-white hover:bg-lime-300"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="font-medium text-xl">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="mt-3 text-black">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
