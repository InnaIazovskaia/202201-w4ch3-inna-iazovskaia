import DisplayContext from "./DisplayContext";

const pressedNumbersAPI = [9, 6, 4, 8, 7];

const DisplayContextProviderTest = ({ children }) => {
  const numbers = pressedNumbersAPI.join("");

  return (
    <DisplayContext.Provider value={{ numbers }}>
      {children}
    </DisplayContext.Provider>
  );
};

export default DisplayContextProviderTest;
