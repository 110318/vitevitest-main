import { test, expect} from 'vitest'
import { ChadChangeimg } from './gigaChange'


test('Cambiar imagen logra realizar la accion correctamente', ()=> {
    const componente = new ChadChangeimg();
    const button = componente.shadowRoot.querySelector('button')
    expect(button).toBeTruthy();




})


test('Identificar que el boton ejecute el audio correctamente', ()=> {
    const componente = new ChadChangeimg();
    const button = componente.shadowRoot.querySelector('button')
    button.click();
    expect(componente.audio.paused).toBeFalsy();




})

test('Cambiar imagen cambia la imagen correctamente', () => {
    const componente = new ChadChangeimg();
    const img = componente.shadowRoot.querySelector('img');
    const button = componente.shadowRoot.querySelector('button');
  
    const initialImageURL = img.src;
  
    button.click();
  
    expect(img.src).not.toEqual(initialImageURL);
  });
  

