import { Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Routes>
      {}
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
