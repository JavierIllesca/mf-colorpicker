import ReactDOM from "react-dom/client";
import ColorPicker from "./components/ColorPicker";
import { useColors } from "./hooks/useColors";


const App = () => {

  const { color, handleChangeColor, handleSubmitSaveColor } = useColors();
  return (
    <section className="container">
      <ColorPicker 
        color={ color }
        handleChangeColor={ handleChangeColor }
        handleSubmitSaveColor={ handleSubmitSaveColor }
      />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);