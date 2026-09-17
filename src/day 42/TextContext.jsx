import { createContext, useState } from "react";

export const userContext = createContext(null);

const TextContext = ({ children }) => {
  const [user, setUser] = useState({ id: 1, name: "John Doe" });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default TextContext;
