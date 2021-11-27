import HomeScreen from "./HomeScreen";
import { Routes, Route } from "react-router";
import InfoScreen from "./InfoScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/loc" element={<InfoScreen />} />
      <Route path="*" element={"Hello Error Screen here!"} />
    </Routes>
  );
}

export default App;
