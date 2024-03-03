
import './App.css';
import { Graphviz } from 'graphviz-react';

function App() {
  return (
    <div className="App">
      <h1>Buena Juliancho</h1>
      <h2> Un grafo</h2>
      <Graphviz
        dot={`digraph {
          a -> b[label="0.2",weight="0.2"];
          a -> c[label="0.4",weight="0.4"];
          c -> b[label="0.6",weight="0.6"];
          c -> e[label="0.6",weight="0.6"];
          e -> e[label="0.1",weight="0.1"];
          e -> b[label="0.7",weight="0.7"];
      }`}
      ></Graphviz>

      <Graphviz
        dot={`graph {
          a -- b[color=red,penwidth=3.0];
          b -- c;
          c -- d[color=red,penwidth=3.0];
          d -- e;
          e -- f;
          a -- d;
          b -- d[color=red,penwidth=3.0];
          c -- f[color=red,penwidth=3.0];
      }`}
      ></Graphviz>
    </div>
  );
}

export default App;
