import "../styles/index.scss";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

const root = createRoot(document.getElementById("exercise2-container"));
root.render(<App />);
