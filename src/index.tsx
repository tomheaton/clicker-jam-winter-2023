import "@styles/index.css";
import ReactDOM from "react-dom/client";
import App from "./app";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <>
    <App />
    <Toaster />
  </>,
);
