/** @type { HTMLCanvasElement} */

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const collisionCanvas = document.getElementById('collisionCanvas')
const collisionCtx = canvas.getContext('2d')
collisionCanvas.width = window.innerWidth
collisionCanvas.height = window.innerHeight

let ravens = []
let score = 0

let timeToNextRaven = 0
let ravenInterval = 500
let lastTime = 0
ctx.font = '50px Helvetica'

class Raven
{
    constructor()
    {
        this.spriteWidth = 271
        this.spriteHeight = 194
        this.sizeModifier = Math.random() * 0.6 + 0.4
        this.width = this.spriteWidth * this.sizeModifier
        this.height = this.spriteHeight * this.sizeModifier
        this.x = canvas.width
        this.y = Math.random() * (canvas.height - this.height)
        this.directionX = Math.random() * 5 + 3
        this.directionY = Math.random() * 5 - 2.5
        this.markedForDeletion = false
        this.image = new Image()
        this.image.src = '/SideScroller/images/raven.png'
        this.frame = 0
        this.maxFrame = 4
        this.timeSinceFlap = 0
        this.flapInterval = Math.random() * 50 + 100
    }

    update(deltaTime)
    {
        this.x -= this.directionX
        this.y += this.directionY

        if (this.y < 0 || this.y > canvas.height)
        {
            this.directionY *= -1
        }

        if (this.x < 0 - this.width)
        {
            this.markedForDeletion = true
        }

        this.timeSinceFlap += deltaTime

        if (this.timeSinceFlap > this.flapInterval)
        {
            if (this.frame > this.maxFrame)
            {
                this.frame = 0
            }
            else
            {
                this.frame++
            }

            this.timeSinceFlap = 0
        }

        if (this.frame > this.maxFrame)
        {
            this.frame = 0
        }
        else
        {
            this.frame++
        }
    }

    draw()
    {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}

const drawScore = () => 
{
    ctx.fillStyle = 'white'
    ctx.fillText('Score: ' + score, 50, 75)
}

window.addEventListener('click', (e) =>
{
    const detectPixelColor = ctx.getImageData(e.x, e.y, 1, 1)
    console.log(detectPixelColor.ImageData)
})

const raven = new Raven()

const animate = (timestamp) => 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let deltaTime = timestamp - lastTime
    lastTime = timestamp
    timeToNextRaven += deltaTime

    if (timeToNextRaven > ravenInterval)
    {
        ravens.push(new Raven())
        timeToNextRaven = 0
    }

    drawScore()

    ravens.forEach((object) => 
    {
        object.update(deltaTime)
        object.draw()
    })

    ravens = ravens.filter((object) => !object.markedForDeletion)

    requestAnimationFrame(animate)
}

animate(0)