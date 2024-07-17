import './styles/App.css';
import Box from './components/Box';
import { useRef } from "react";

const box = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const boxOrders = [];

function App() {
  const boxRefs = useRef([]);

  return (
    <div className="App">
      {
        box.map((boxIndex, index) => <Box boxIndex={boxIndex} boxRefs={boxRefs} boxOrders={boxOrders} />)
      }
    </div>
  );
}

export default App;
