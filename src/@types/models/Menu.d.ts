/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />

namespace Models {
  interface Menu {
    name: string;
    key: string;
    subMenu: SubMenu[];
  }

  type PagesName =
    | "home"
    | "coordenacao"
    | "professores_conteudistas"
    | "equipe_producao"
    | "estrutura"
    | "matriz"
    | "informacoes_gerais"
    | "regulamento"
    | "edital"
    | "inscricao"
    | "formularios"
    | "solicitacoes_discente"
    | "ava"
    | "perguntas_frequentes"
    | "calendario"
    | "biblioteca"
    | "localizacao"
    | "fale_conosco"
    | "ouvidoria";

  interface SubMenu {
    name: string;
    key: string;
  }
}
