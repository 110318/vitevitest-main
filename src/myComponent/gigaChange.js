



 export class ChadChangeimg extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.audio = document.createElement('audio')
        this.audio.src = 'gigaShort.mp3'

        const images = [
          'imgs/giga2.jpg',
          'imgs/giga 3.jpg',
          'imgs/giga 4.jpg',
          'imgs/giga 5.jpg'
        ]

        let currentImageIndex = 0;

        const imageContainer = document.createElement('div')
        const img = document.createElement('img')
        
        img.src = 'imgs/giga1.jpg'
        imageContainer.appendChild(img)

        const button = document.createElement('button')
        button.innerText = 'Cambiar imagen';
        button.addEventListener('click',() => {
          currentImageIndex = (currentImageIndex + 1) %images.length
          img.src = images[currentImageIndex];
          this.audio.play();

        })
        

        const style = document.createElement('style');
        style.textContent = `
        img {
          position: absolute;
          top:30%;
          left: 40%;

          transform: translate (-50%, -50%);
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 10px;
          
        }
        button {
          position: absolute;
          top:75%;
          left: 45%;
          margin-top: 16px;
          padding: 8px 16px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
         
        }
        
        
        `;
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(imageContainer);
      this.shadowRoot.appendChild(button)
    }
  }








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
