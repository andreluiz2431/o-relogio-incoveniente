export const violacoesIHC = [
  {
    id: 1,
    funcionalidade: "Tempo Criptografado",
    conceito: "Correspondência entre o sistema e o mundo real (Nielsen)",
    relatorio: "O relógio exibe as horas em formatos ilegíveis (segundos, hex, binário) que não correspondem às convenções do usuário."
  },
  {
    id: 2,
    funcionalidade: "Botão 'Invisível' (Mudar Formato)",
    conceito: "Affordance e Significantes (Norman)",
    relatorio: "O 'botão' para mudar o formato é apenas um texto sublinhado. O design não sugere (affordance) sua função e faltam pistas (significantes) de que é clicável."
  },
  {
    id: 3,
    funcionalidade: "Ação sem Feedback (Mudar Formato)",
    conceito: "Visibilidade do status do sistema (Nielsen)",
    relatorio: "Quando o formato é trocado, não há feedback visual (ex: 'Formato alterado!') ou no próprio 'botão'. O usuário não sabe se o clique funcionou."
  },
  {
    id: 4,
    funcionalidade: "Alarme com Campo de Texto",
    conceito: "Prevenção de erros (Nielsen)",
    relatorio: "O sistema usa um campo de texto livre para definir um alarme, o que é propenso a erros. Um seletor de tempo (time picker) preveniria erros."
  },
  {
    id: 5,
    funcionalidade: "Mensagem de Erro Críptica",
    conceito: "Ajuda na recuperação de erros (Nielsen)",
    relatorio: "A mensagem 'Erro 0x80070057' não ajuda o usuário a diagnosticar o problema (formato errado) nem a corrigi-lo."
  },
  {
    id: 6,
    funcionalidade: "Posição Inconsistente",
    conceito: "Consistência e padrões (Nielsen)",
    relatorio: "O botão 'Definir' está à direita, mas o 'Cancelar Alarme' aparece em um local aleatório, quebrando o padrão e forçando o usuário a caçá-lo."
  },
  {
    id: 7,
    funcionalidade: "Saída Bloqueada",
    conceito: "Controle e liberdade do usuário (Nielsen)",
    relatorio: "Ao dificultar a localização do botão 'Cancelar Alarme', o sistema impede que o usuário desfaça facilmente uma ação."
  },
  {
    id: 8,
    funcionalidade: "Interface Poluída / Fonte Ruim",
    conceito: "Design estético e minimalista (Nielsen)",
    relatorio: "O fundo animado, a fonte 'Comic Sans' e as cores aleatórias criam poluição visual que compete com a informação principal (a hora)."
  },
  {
    id: 9,
    funcionalidade: "Controle Ineficiente (Fuso)",
    conceito: "Flexibilidade e eficiência de uso (Nielsen)",
    relatorio: "O ajuste de fuso horário força o usuário a clicar +/- 1h de cada vez, o que é terrivelmente ineficiente para fusos distantes."
  },
  {
    id: 10,
    funcionalidade: "Layout Inconsistente (Botões)",
    conceito: "Consistência e padrões (Nielsen)",
    relatorio: "Os botões 'Tema' e 'Som' trocam de lugar com base no segundo atual, quebrando a consistência interna e fazendo o usuário errar o clique."
  },
  {
    id: 11,
    funcionalidade: "Ajuda Inútil (?)",
    conceito: "Ajuda e documentação (Nielsen)",
    relatorio: "O botão de ajuda (?) não oferece ajuda real sobre o sistema, mas sim uma citação filosófica irrelevante sobre o tempo."
  },
  // --- NOVA VIOLAÇÃO ---
  {
    id: 12,
    funcionalidade: "Relógio Analógico Confuso",
    conceito: "Mapeamento (Norman) / Correspondência sistema-mundo real (Nielsen)",
    relatorio: "O relógio analógico inverte o tamanho dos ponteiros (hora maior que minuto), inverte a ordem dos números, ou possui ponteiros que se movem de forma não convencional, quebrando o mapeamento intuitivo."
  }
];
