import { useState } from "react";
import "jsuites"
import "jsuites/dist/jsuites.css"

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    url: "",
    outro: "",
    descricao: "",
    prazo: "",
    origem: "",
  });

  const [customService, setCustomService] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const link ='https://script.google.com/macros/s/AKfycbzqebpKBg95bBcR7S9OQ7WtwJOo2rUHau7zQCR7D7V9CyH5EADwoB6GD0u19m7XEUWeMw/exec'

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nome: form.nome,
      email: form.email,
      whatsapp: form.whatsapp,
      empresa: form.empresa,
      servico: customService,
      url:
        customService === "Redesign" ||
        customService === "Segurança / manutenção"
          ? form.url
          : "",
      outro: customService === "Outro" ? form.outro : "",
      descricao: form.descricao,
      prazo: form.prazo,
      origem: form.origem,
    };

    try {
      const response = await fetch(link, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Solicitação enviada com sucesso!");
        setForm({
          nome: "",
          email: "",
          whatsapp: "",
          empresa: "",
          url: "",
          outro: "",
          descricao: "",
          prazo: "",
          origem: "",
        });
        setCustomService("");
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro de conexão.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-6"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Solicitar Orçamento</h2>

      {/* Nome */}
      <div>
        <label className="block font-medium">Nome completo *</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl"
          placeholder="Digite seu nome completo"
        />
      </div>

      {/* E-mail */}
      <div>
        <label className="block font-medium">E-mail *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl"
          placeholder="seu@email.com"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label className="block font-medium">WhatsApp (opcional)</label>
        <input
        data-mask='(00) 00000-0000'
          type="tel"
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl"
          placeholder="(00) 90000-0000"
        />
      </div>

      {/* Empresa */}
      <div>
        <label className="block font-medium">Empresa ou Projeto (opcional)</label>
        <input
          type="text"
          name="empresa"
          value={form.empresa}
          onChange={handleChange}
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl"
          placeholder="Nome da empresa ou projeto"
        />
      </div>

      {/* Tipo de serviço */}
      <div>
        <label className="block font-medium">Tipo de serviço desejado *</label>
        <select
          required
          value={customService}
          onChange={(e) => setCustomService(e.target.value)}
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl"
        >
          <option value="">Selecione uma opção</option>
          <option value="Criação de site">Criação de site</option>
          <option value="Redesign">Redesign</option>
          <option value="Consultoria técnica">Consultoria técnica</option>
          <option value="Sistema sob medida">Sistema sob medida</option>
          <option value="Segurança / manutenção">Segurança / manutenção</option>
          <option value="Outro">Outro</option>
        </select>

        {customService === "Redesign" || customService === "Segurança / manutenção" ? (
          <input
            type="url"
            name="url"
            value={form.url}
            onChange={handleChange}
            required
            placeholder="Informe a URL do site atual"
            className="w-full mt-3 p-3 border border-blue-300 rounded-xl"
          />
        ) : null}

        {customService === "Outro" ? (
          <input
            type="text"
            name="outro"
            value={form.outro}
            onChange={handleChange}
            placeholder="Descreva o serviço desejado"
            className="w-full mt-3 p-3 border border-gray-300 rounded-xl"
          />
        ) : null}
      </div>

      {/* Descrição */}
      <div>
        <label className="block font-medium">Mensagem ou descrição do projeto *</label>
        <textarea
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          required
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl h-32"
          placeholder="Descreva o que precisa, metas ou ideias..."
        />
      </div>

      {/* Prazo */}
      <div>
        <label className="block font-medium">Prazo ideal para entrega (opcional)</label>
        <select
          name="prazo"
          value={form.prazo}
          onChange={handleChange}
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl"
        >
          <option value="">Selecione um prazo</option>
          <option value="Urgente">Urgente</option>
          <option value="15 dias">Até 15 dias</option>
          <option value="30 dias">Até 30 dias</option>
          <option value="Flexível">Flexível</option>
        </select>
      </div>

      {/* Origem */}
      <div>
        <label className="block font-medium">Como conheceu meu trabalho? (opcional)</label>
        <input
          type="text"
          name="origem"
          value={form.origem}
          onChange={handleChange}
          placeholder="Ex: Google, Instagram, indicação..."
          className="w-full mt-1 p-3 border border-gray-300 rounded-xl"
        />
      </div>

      {/* Botão */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all"
        >
          Enviar Solicitação
        </button>
      </div>
    </form>
  );
}
