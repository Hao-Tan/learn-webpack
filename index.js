import src from "./img/1.png"
import "./index.scss";

const img = new Image();
img.className = "avatar";
img.src = src;

document.body.append(img);