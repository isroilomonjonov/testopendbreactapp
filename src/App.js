import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./pages/Form";
import Test from "./pages/Test";
import { useContext } from "react";
import AppContext from "./context/AppContext";

function App() {
  const ctx = useContext(AppContext);
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      {ctx.tests[0] && <Route path="/tests" element={<Test />} />}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
export default App;