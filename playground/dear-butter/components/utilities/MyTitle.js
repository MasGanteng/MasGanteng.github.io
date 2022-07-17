class MyTitle extends HTMLElement {
  text = "";
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes(){
    return text
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = `
      `;

    const template = `
          <h1>${this.text}</h1>
        `;

    this.shadowRoot.innerHTML = `${style} ${template}`;
  }
}

customElements.define("my-title", MyTitle);
