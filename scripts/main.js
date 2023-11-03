import * as board from './board.js'

const mainBoard = new board.Board()
const FPS = 20
const objs = [mainBoard]
const canvas = document.getElementById('c')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

let deltaTime
let lastFrameTime = 0

function handle_key_presses() {

}

function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let obj of objs) {
        obj.draw(ctx)
    }
}

function animate(timestamp) {
    deltaTime = (timestamp - lastFrameTime) / 1000

    handle_key_presses()
    redraw()
    lastFrameTime = timestamp
    gameLoop()
}

function gameLoop() {
    setTimeout(function() {
        requestAnimationFrame(animate);
    }, 1000 / FPS);
}

function main() {
    gameLoop()
}

if (typeof window !== 'undefined') {
    window.onload = function() {
        main()
    }
}
