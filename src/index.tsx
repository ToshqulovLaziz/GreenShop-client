import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProviderConfig from "./tools/provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ProviderConfig>
    <Navbar />
    <Hero />
  </ProviderConfig>,
);
