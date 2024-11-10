import "./App.css";
import { Graph } from "./component/Graph";
import { Sales } from "./page/sales";

function App() {
  return (
    <div className="w-full">
      <Sales />
      <Graph />
    </div>
  );
}

export default App;
