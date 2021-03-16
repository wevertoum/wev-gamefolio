/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />

declare module "less-vars-to-js";

declare type RuntimeVariables = { [key: string]: string | undefined };

declare const variables: RuntimeVariables;

/**
 * Pacote de interfaces que representam as Actions de um reducer.
 */
namespace Actions {
  /**
   * @see ~/src/@types/actions/*
   */
}

/**
 * Pacote de interfaces destinadas a definir os tipos dos objetos que
 * representam os contextos.
 */
namespace Contexts {
  /**
   * @see ~/src/@types/contexts/*
   */
}

/**
 * Pacote de interfaces que representam a modelagem de uma determinada regra de
 * negócio a nível de API.
 */
namespace Models {
  /**
   * @see ~/src/@types/models/*
   */
}

interface Dict<T> {
  [key: string]: T;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}
