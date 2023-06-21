import { getCurrentLanguage } from "@/api/resumeService.js";

export const resume = {
  state() {
    return {
      currentLanguage: getCurrentLanguage(),
    };
  },
};
