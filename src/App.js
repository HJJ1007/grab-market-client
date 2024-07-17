// import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
