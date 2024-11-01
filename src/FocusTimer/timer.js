import state from './state.js'
import * as el from './elements.js'

export function countdown() {
    if(!state.isRunning) {
        return
    }
    
    console.log('iniiiccciiiiooouuuu')
    
    setTimeout(() => countdown(), 1000)
    // setTimeout é uma função que recebe um callback
    // countdown é uma função que vai ser chamada de volta
    // 1000 é uma unidade de tempo que representa milissegundo (ms) ou equivalente a 1 segundo (s)
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds
    // ?? se chama nullish coalescing operator

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}




