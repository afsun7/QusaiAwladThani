import { createContext, useState } from "react";

export const DirectionContext = createContext();
const [language, setlanguage] = useState("en");

export default function ContextProvider({ children }) {
  //
  function changeEnglish() {
    document.querySelector("body").classList.remove("rtl");
    console.log(document.querySelector("body").dir);
    setlanguage("en");

    // i18n.changeLanguage("en");
    // (elem.style.fontFamily = "Poppins"), "sans-serif";
  }
  function changePersian() {
    document.querySelector("body").classList.remove("ltr");
    console.log(document.querySelector("body").dir);
    setlanguage("fa");
    // i18n.changeLanguage("fr");
  }
  function changeArabic() {
    document.querySelector("body").classList.remove("ltr");
    console.log(document.querySelector("body"));
    setlanguage("ar");
    // i18n.changeLanguage("ar");
    // (elem.style.fontFamily =  "cursive");
  }

  return (
    <DirectionContext.Provider
      value={{ changeArabic, changeEnglish, changePersian, language }}
    >
      {children}
    </DirectionContext.Provider>
  );
}
