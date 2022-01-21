export class MyFooter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  
    render() {
      const datas = [
        { nama: "Joko", kelamin: "L" },
        { nama: "Siti", kelamin: "P" },
      ];

      import style from './style.js'
  
      const template = `
        <footer>
          <h1>hello footer</h1>
          <div id="abc"></div>
          <p>&copy; Copyright <slot name="copyright"></slot> by MasGanteng</p>
        </footer>
        `;
  
      this.shadowRoot.innerHTML = `${style} ${template}`;
    }
  }
  