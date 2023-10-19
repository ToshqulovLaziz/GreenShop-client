import ReactDOM from "react-dom/client";
import ProviderConfig from "./tools/provider";
import Root from "./Root";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ProviderConfig>
    <Root />
  </ProviderConfig>,
);
