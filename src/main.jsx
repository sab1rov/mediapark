import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./assets/scss/main.scss"
import "./index.css"
import { BrowserRouter } from "react-router"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
