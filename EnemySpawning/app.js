/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 500

class Enemy 
{
    constructor()
    {
        this.x = 10
        this.y = 50
        this.width = 100
        this.height = 100
    }
}

const enemy1 = new Enemy()
const enemy2 = new Enemy()

const animate = () => 
{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemy1.x++
    enemy1.y++
    enemy2.x++
    enemy2.y++
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height)

    requestAnimationFrame(animate)
}

animate()