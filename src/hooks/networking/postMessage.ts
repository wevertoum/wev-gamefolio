import { useCallback } from "react";
import api from "utils/api";

export function usePostMessage() {
  return useCallback(async <O extends Object>(body?: {}, params?: O) => {
    await api.post<Models.Message>("mnqowynq/", body, {
      // TODO adicionar meu formspree
      params,
    });
  }, []);
}
