/// <reference path="functions.ts" />

import { SW } from "./functions";

export class Nav {
  private toggler: HTMLElement;
  private nav: HTMLElement;
  private navItems: HTMLElement[] = [];
  private className: string;

  /**
   *
   * @param navSelector Css selector for nav
   * @param togglerSelector Css selector for toggler
   * @param className Name of the class to be added to both toggler and nav
   */
  constructor(
    navSelector: "nav",
    togglerSelector = "#hamburger",
    className = "open"
  ) {
    this.toggler = document.querySelector(togglerSelector);
    this.nav = document.querySelector(navSelector);
    this.navItems = Array.prototype.slice.call(this.nav.querySelectorAll("a"));
    this.className = className;
    this.addTogglerEvent();
  }

  private addTogglerEvent() {
    this.toggler.addEventListener("click", () => {
      SW.ToggleClass(this.nav, this.className);
      SW.ToggleClass(this.toggler, this.className);
    });
  }

  /**
   * Adds scroll functionality to local links
   * @param gotoLabels Array of css selectors for target elements (exteranl links to this page should be left as empty strings)
   */
  public addNavItemsEvent(gotoLabels: string[]) {
    this.navItems.forEach((navItem, index) => {
      navItem.addEventListener("click", e => {
        if (gotoLabels[index] !== "") {
          e.preventDefault();
          SW.VerticalScroll(document.querySelector(gotoLabels[index]), 300, 0);
        }
        SW.ToggleClass(this.nav, this.className);
        SW.ToggleClass(this.toggler, this.className);
      });
    });
  }
}
