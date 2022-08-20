import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className="mx-auto max-w-full py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <div className="mx-auto max-w-screen-md pt">
        <TopButtons />
        <Inputs />
      </div>
    </div>
  );
}

export default App;
