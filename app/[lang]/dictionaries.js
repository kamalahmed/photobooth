import "server-only";
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  bn: () => import("./dictionaries/bn.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  const fn = dictionaries[locale];
  if (fn) {
    return fn();
  } else {
    return dictionaries.en();
  }
};
