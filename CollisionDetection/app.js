/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 700

ctx.fillStyle = 'white'
ctx.fillRect(50, 50, 100, 150)

const explosions = []

let canvasPosition = canvas.getBoundingClientRect()

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

    update()
    {
        this.frame++
    }

    draw()
    {
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

window.addEventListener('click', (e) =>
{
    let positionX = e.x - canvasPosition.left
    let positionY = e.y - canvasPosition.top
})