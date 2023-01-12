/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 500
const numberOfEnemies = 100
const enemiesArray = []

const enemyImage = new Image()
enemyImage.src = './images/enemy_bat_1.png'

class Enemy 
{
    constructor()
    {
        this.x = Math.random() * CANVAS_WIDTH
        this.y = Math.random() * CANVAS_HEIGHT
        this.speed = Math.random() * 4 - 2
        this.spriteWidth = 83
        this.spriteHeight = 44
        this.width = this.spriteWidth / 2
        this.height = this.spriteHeight / 2
        this.frame = 0
    }

    update()
    {
        this.x += this.speed
        this.y += this.speed
        // animate frames
        this.frame > 4 ? this.frame = 0 : this.frame++
    }

    draw()
    {
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(enemyImage, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

for (let i = 0; i < numberOfEnemies; i++)
{
    enemiesArray.push(new Enemy())
}

const animate = () => 
{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    enemiesArray.forEach((enemy) =>
    {
        enemy.update()
        enemy.draw()
    })

    requestAnimationFrame(animate)
}

animate()