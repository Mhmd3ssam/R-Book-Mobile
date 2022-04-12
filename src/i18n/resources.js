import fallback from "./fallback";
import feedback from "./feedback";

const resources = {
  ar: {
    fallback: fallback.ar,
    feedback: feedback.ar,
  },
  en: {
    fallback: fallback.en,
    feedback: feedback.en,
  }
};
console.log(resources)
export default resources;