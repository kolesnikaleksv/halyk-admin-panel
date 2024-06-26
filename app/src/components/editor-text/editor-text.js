export default class EditorText {
  constructor(element, virtualElement) {
    this.element = element;
    this.virtualElement = virtualElement;
    this.element.addEventListener("click", () => this.onClick());
    this.element.addEventListener("blur", () => this.onBlure());
    this.element.addEventListener("keypress", (e) => this.onKeyPress(e));
    this.element.addEventListener("input", () => this.onTextEdit());
    if(this.element.parentNode.nodeName === "A" || this.element.parentNode.nodeName === "BUTTON") {
      this.element.addEventListener("contextmenu", (e) => this.onCtxMenu(e));
    }
  }

  onCtxMenu(e) {
    e.preventDefault();
    this.onClick();
  }

  onClick() {
    this.element.contentEditable = "true";
    this.element.focus();
  }

  onBlure() {
    this.element.removeAttribute("contenteditable");
  }

  onKeyPress(e) {
    if(e.keyCode === 13) {
      this.element.removeAttribute("contenteditable");
    }
  }

  onTextEdit() {
    this.virtualElement.innerHTML = this.element.innerHTML;
  }
}