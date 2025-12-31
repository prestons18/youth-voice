import { h, render } from "@prestonarnold/fuse";
import App from "./app";

const app = document.getElementById("app");
if (app) {
  render(<App />, app);
}
