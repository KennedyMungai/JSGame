/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 500

enemy1 = {
    x: 0,
    y: 0,
    width: 200,
    height: 200
}

const animate = () => 
{
    enemy1.x++
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height)

    requestAnimationFrame(animate)
}

animate()