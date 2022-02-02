import { useContext } from "react";
import DisplayContext from "../../contexts/DisplayContext";

const Display = () => {
  const { numbers } = useContext(DisplayContext);

  return <span className="number">{numbers}</span>;
};

export default Display;
