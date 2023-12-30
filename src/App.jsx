import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "../components/Product";

function App() {
  console.log("sds");
  return (
    <Router>
      <Routes>
        <Route path="/ProductListing" element={<ProductListing />} />
      </Routes>
    </Router>
  );
}

export default App;
