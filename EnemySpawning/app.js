/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 500

// enemy1 = {
//     x: 0,
//     y: 0,
//     width: 100,
//     height: 100
// }

class Enemy 
{

}

const animate = () => 
{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemy1.x++
    enemy1.y++
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height)

    requestAnimationFrame(animate)
}

animate()