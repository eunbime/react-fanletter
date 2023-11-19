import { createContext, useMemo, useState } from "react";
export const LetterContext = createContext();

const jsonData = require("../letterData.json");

export function LetterContextProvider(props) {
  const [letterList, setLetterList] = useState(jsonData);
  const [selectedMember, setSelectedMember] = useState("");

  const value = useMemo(() => {
    return [[...letterList], setLetterList, selectedMember, setSelectedMember];
  }, [letterList, selectedMember]);

  return <LetterContext.Provider value={value} {...props} />;
}
