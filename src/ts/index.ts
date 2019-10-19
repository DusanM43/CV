import "../scss/main.scss";

import { SW } from "./functions";
import { Nav } from "./nav";

let nav = new Nav("nav", "#hamburger", "open");
const labels = ["#home", "#info", "#skills", "#programs"];
nav.addNavItemsEvent(labels);
