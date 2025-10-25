import React from 'react';
import { violacoesIHC } from '../data/violacoes';

interface ReportProps {
  showReport: boolean;
  onToggleReport: () => void;
}

const Report: React.FC<ReportProps> = ({ showReport, onToggleReport }) => {
  return (
    <div className="relative z-20 mt-8 border-t-2 border-dashed border-gray-600 pt-6">
      <button 
        onClick={onToggleReport}
        className="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-black
                   font-bold rounded-lg text-lg"
      >
        {showReport ? 'Ocultar Relatório de Violações' : 'Ver Relatório de Violações'}
      </button>

      {showReport && (
        <div className="mt-6 overflow-x-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="font-bold">Proposta Conceitual</h2>
            <p className="text-justify">
              O projeto 'O Pior Relógio do Mundo' é um exercício prático de 'design reverso', onde o objetivo principal é criar uma experiência de usuário propositalmente ruim. A proposta é violar sistematicamente um conjunto de princípios e heurísticas de design consagrados na área de Interação Humano-Computador (IHC), como os de Nielsen e Norman. Ao fazer isso, o projeto serve como uma ferramenta educacional para destacar a importância desses guias, tornando tangíveis as consequências de ignorá-los. O relógio, uma aplicação aparentemente simples, transforma-se em um campo de provas para más práticas, desde interfaces confusas e feedback inadequado até a falta de controle e consistência, gerando frustração e ineficiência para o usuário.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-center my-4">Relatório de Violações de IHC</h2>
          <table className="w-full text-left border-collapse">
            <thead className="bg-black bg-opacity-50">
              <tr>
                <th className="border border-gray-500 p-3">Funcionalidade "Ruim"</th>
                <th className="border border-gray-500 p-3">Conceito de IHC Violado</th>
                <th className="border border-gray-500 p-3">Relatório (Como Infringe)</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 bg-opacity-70">
              {violacoesIHC.map((violacao) => (
                <tr key={violacao.id} className="hover:bg-gray-700">
                  <td className="border border-gray-500 p-3 text-sm font-bold">{violacao.funcionalidade}</td>
                  <td className="border border-gray-500 p-3 text-sm italic">{violacao.conceito}</td>
                  <td className="border border-gray-500 p-3 text-sm">{violacao.relatorio}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="prose prose-invert max-w-none mt-6">
            <h2 className="font-bold">Lições Aprendidas</h2>
            <p className="text-justify">
              O desenvolvimento deste projeto reforçou de maneira prática a importância fundamental dos princípios de design na criação de sistemas interativos eficazes e agradáveis. Ao quebrar intencionalmente as regras, tornou-se evidente como cada princípio contribui para a usabilidade e a experiência do usuário. Conceitos como 'affordance', 'feedback' e 'consistência' deixaram de ser abstratos e se materializaram em frustrações concretas quando ausentes. A atividade solidificou o entendimento de que um bom design não é um luxo, mas uma necessidade para a comunicação clara entre o sistema e o usuário, e que a prevenção de erros é muito mais valiosa do que a simples exibição de mensagens de erro.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
