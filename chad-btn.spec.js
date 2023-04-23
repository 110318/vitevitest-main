import { html, fixture, expect} from 'vitest/esm-bundle.js'
import './gigaChange.js'
import { describe, it } from 'vitest'

describe('chad button change',()=>{
    it('Cambia la imagen y reproduce el sonido al hacer click en el boton',async()=>{
        const el = await fixture(html `<chad-btn></chad-btn>`);
        const button = el.shadowRoot.querySelector('#button');
        const image = el.shadowRoot.querySelector('#image');
        const src = image.src;


        button.dispatchEvent(new MouseEvent('click'));
        await el.updateComplete;
        expect(image.src).not.to.equal(src);
        expect(el.audio.currentTime).to.equal(0);
        expect(el.audio.paused).to.be.false;
    })
})