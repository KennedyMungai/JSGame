/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 500
const numberOfEnemies = 100
const enemiesArray = []

class Enemy 
{
    constructor()
    {
        this.x = Math.random() * CANVAS_WIDTH
        this.y = Math.random() * CANVAS_HEIGHT
        this.width = 100
        this.height = 100
        this.speed = Math.random() * 4 - 2
    }

    update()
    {
        this.x += this.speed
        this.y += this.speed
    }

    draw()
    {
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++)
{
    enemiesArray.push(new Enemy())
}

const animate = () => 
{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    // enemy1.update()
    // enemy1.draw()
    enemiesArray.forEach((enemy) =>
    {
        enemy.update()
        enemy.draw()
    })

    requestAnimationFrame(animate)
}

animate()