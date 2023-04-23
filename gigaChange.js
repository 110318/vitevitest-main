



class ChadimgButtonChange extends HTMLElement{
    constructor(){
        super();
        this.imageSrc=['./imgs/giga1.jpg','./imgs/giga2.jpg','./imgs/giga 3.jpg','./imgs/giga 4.jpg' ];
        this.currentIndex = 0;
        this.audio = document.createElement('audio')
        this.audio.src = 'gigaShort.mp3'



    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        div{
          display:flex;
     
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        button {
         
          margin-top: 16px;
          padding: 8px 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        img {
          
          width: 300px;
          
          height: 300px;
          border-radius:20px;
          
          object-fit: cover;
        }
        img:hover{
          filter: drop-shadow(0 8px 24px #646cffaa);
        }
      </style>
      <h1>Welcome to Gigaworld!</h1>
      <div>
        <img id="image" src="${this.imageSrc[this.currentIndex]}">
        <button id="button">Cambiar imagen</button>
      </div>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    this.button = this.shadowRoot.querySelector('#button');
    this.image = this.shadowRoot.querySelector('#image');
    this.button.addEventListener('click', () => {
    this.cambiarImagen()
    this.audio.play()});
  }
  
  cambiarImagen() {
    this.currentIndex = (this.currentIndex + 1) % this.imageSrc.length;
    this.image.src = this.imageSrc[this.currentIndex];
  }
}

customElements.define('chad-btn', ChadimgButtonChange);









// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
