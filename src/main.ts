import "./style.css";
import { run_bg_canvas } from "./bg";

document.querySelector("#msg")!.innerHTML = window.location.hostname;

run_bg_canvas();
