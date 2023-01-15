/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 700

ctx.fillStyle = 'white'
ctx.fillRect(50, 50, 100, 150)

const explosions = []

class Explosions
{
    constructor(x, y)
    {
        this.x = x
        this.y = y
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.width = this.spriteWidth * 0.5
        this.height = this.spriteHeight * 0.5
        this.image = new Image()
        this.image.src = '/CollisionDetection/images/boom.png'
        this.frame = 0
    }


}