const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 10

const backgroundLayer1 = new Image()
backgroundLayer1.src = './images/background/layer-1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = './images/background/layer-2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = './images/background/layer-3.png'
const backgroundLayer4 = new Image()
backgroundLayer4.src = './images/background/layer-4.png'
const backgroundLayer5 = new Image()
backgroundLayer5.src = './images/background/layer-5.png'

class Layer
{
    constructor(image, speedModifier)
    {
        this.x = 0
        this.y = 0
        this.width = 4200
        this.height = 700
        this.x2 = this.width
        this.image = image
        this.speedModifier = speedModifier
        this.speed = gameSpeed * this.speedModifier
    }

    update()
    {
        this.speed = gameSpeed * this.speedModifier

        if (this.x <= -this.width)
        {
            this.x = this.width + this.x2 - this.speed
        }

        if (this.x2 <= -this.width)
        {
            this.x2 = this.width + this.x - this.speed
        }

        this.x = Math.floor(this.x - this.speed)
        this.x2 = Math.floor(this.x2 - this.speed)
    }

    draw()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height)
    }


}

const animate = () =>
{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.drawImage(backgroundLayer4, x, 0)

    requestAnimationFrame(animate)
}

animate()