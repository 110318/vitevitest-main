import { setupCounter } from './counter.js'

describe('Counter functions suite', ()=>{

    it('setupCounter function with no click', ()=>{
        ///Arrange
        const elem = document.createElement('button')

        ///Act
        setupCounter(elem)

        ///Assert
        expect(elem.innerHTML).toEqual('count is 0')
        })

    })