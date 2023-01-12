// /** @type {HTMLCanvasElement} */
// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d')
// const CANVAS_WIDTH = canvas.width = 600
// const CANVAS_HEIGHT = canvas.height = 500
// const numberOfEnemies = 50
// const enemiesArray = []

// let gameFrame = 0

// class Enemy 
// {
//     constructor()
//     {
//         this.image = new Image()
//         this.image.src = './images/enemy_bat_1.png'
//         // this.speed = Math.random() * 4 - 2
//         this.spriteWidth = 83
//         this.spriteHeight = 44
//         this.width = this.spriteWidth / 2
//         this.height = this.spriteHeight / 2
//         this.x = Math.random() * (CANVAS_WIDTH - this.width)
//         this.y = Math.random() * (CANVAS_HEIGHT - this.height)
//         this.frame = 0
//         this.flapSpeed = Math.floor(Math.random() * 3 + 1)
//     }

//     update()
//     {
//         this.x += Math.random() * 5 - 2.5
//         this.y += Math.random() * 5 - 2.5
//         // animate frames
//         if (gameFrame % this.flapSpeed === 0)
//         {
//             this.frame > 4 ? this.frame = 0 : this.frame++
//         }
//     }

//     draw()
//     {
//         ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
//     }
// }

// for (let i = 0; i < numberOfEnemies; i++)
// {
//     enemiesArray.push(new Enemy())
// }

// const animate = () => 
// {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

//     enemiesArray.forEach((enemy) =>
//     {
//         enemy.update()
//         enemy.draw()
//     })
//     gameFrame++

//     requestAnimationFrame(animate)
// }

// animate()


// /** @type {HTMLCanvasElement} */
// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d')
// const CANVAS_WIDTH = canvas.width = 600
// const CANVAS_HEIGHT = canvas.height = 500
// const numberOfEnemies = 50
// const enemiesArray = []

// let gameFrame = 0

// class Enemy 
// {
//     constructor()
//     {
//         this.image = new Image()
//         this.image.src = './images/enemy_bat_3.png'
//         this.speed = Math.random() * 4 + 1
//         this.spriteWidth = 265
//         this.spriteHeight = 188
//         this.width = this.spriteWidth / 2
//         this.height = this.spriteHeight / 2
//         this.x = Math.random() * (CANVAS_WIDTH - this.width)
//         this.y = Math.random() * (CANVAS_HEIGHT - this.height)
//         this.frame = 0
//         this.flapSpeed = Math.floor(Math.random() * 3 + 1)
//         this.angle = 0
//         this.angleSpeed = Math.random() * 0.2
//         this.curve = Math.random() * 7
//     }

//     update()
//     {
//         this.x -= this.speed
//         this.y += this.curve * Math.sin(this.angle)
//         this.angle += this.angleSpeed
//         // animate frames

//         if (this.x + this.width < 0) this.x = canvas.width

//         if (gameFrame % this.flapSpeed === 0)
//         {
//             this.frame > 4 ? this.frame = 0 : this.frame++
//         }
//     }

//     draw()
//     {
//         ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
//     }
// }

// for (let i = 0; i < numberOfEnemies; i++)
// {
//     enemiesArray.push(new Enemy())
// }

// const animate = () => 
// {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

//     enemiesArray.forEach((enemy) =>
//     {
//         enemy.update()
//         enemy.draw()
//     })
//     gameFrame++

//     requestAnimationFrame(animate)
// }

// animate()


// /** @type {HTMLCanvasElement} */
// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d')
// const CANVAS_WIDTH = canvas.width = 600
// const CANVAS_HEIGHT = canvas.height = 500
// const numberOfEnemies = 20
// const enemiesArray = []

// let gameFrame = 0

// class Enemy 
// {
//     constructor()
//     {
//         this.image = new Image()
//         this.image.src = './images/enemy_ghost_1.png'
//         this.speed = Math.random() * 4 + 1
//         this.spriteWidth = 217
//         this.spriteHeight = 177
//         this.width = this.spriteWidth / 2
//         this.height = this.spriteHeight / 2
//         this.x = Math.random() * (CANVAS_WIDTH - this.width)
//         this.y = Math.random() * (CANVAS_HEIGHT - this.height)
//         this.frame = 0
//         this.flapSpeed = Math.floor(Math.random() * 3 + 1)
//         this.angle = 0
//         this.angleSpeed = Math.random() * 0.2 + 0.5
//         this.curve = Math.random() * 200 + 50
//     }

//     update()
//     {
//         this.x = canvas.width / 2 * Math.sin(this.angle * Math.PI / 90) + (CANVAS_WIDTH / 2 - this.width / 2)
//         this.y = canvas.height / 2 * Math.cos(this.angle * Math.PI / 270) + (CANVAS_WIDTH / 2 - this.width / 2)
//         this.angle += this.angleSpeed
//         // animate frames

//         if (this.x + this.width < 0) this.x = canvas.width

//         if (gameFrame % this.flapSpeed === 0)
//         {
//             this.frame > 4 ? this.frame = 0 : this.frame++
//         }
//     }

//     draw()
//     {
//         ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
//     }
// }

// for (let i = 0; i < numberOfEnemies; i++)
// {
//     enemiesArray.push(new Enemy())
// }

// const animate = () => 
// {
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

//     enemiesArray.forEach((enemy) =>
//     {
//         enemy.update()
//         enemy.draw()
//     })
//     gameFrame++

//     requestAnimationFrame(animate)
// }

// animate()


/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 500
const numberOfEnemies = 20
const enemiesArray = []

let gameFrame = 0

class Enemy 
{
    constructor()
    {
        this.image = new Image()
        this.image.src = './images/enemy_ghost_1.png'
        this.speed = Math.random() * 4 + 1
        this.spriteWidth = 217
        this.spriteHeight = 177
        this.width = this.spriteWidth / 2
        this.height = this.spriteHeight / 2
        this.x = Math.random() * (CANVAS_WIDTH - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT - this.height)
        this.newX = Math.random() * (CANVAS_WIDTH - this.width)
        this.newY = Math.random() * (CANVAS_HEIGHT - this.height)
        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }

    update()
    {
        if (gameFrame % 30 === 0)
        {
            this.newX = Math.random() * (CANVAS_WIDTH - this.width)
            this.newY = Math.random() * (CANVAS_HEIGHT - this.height)
        }

        let dx = this.x - this.newX
        let dy = this.y - this.newY

        this.x -= dx
        this.y -= dy

        // this.x = 0
        // this.y = 0
        this.angle += this.angleSpeed
        // animate frames

        if (this.x + this.width < 0) this.x = canvas.width

        if (gameFrame % this.flapSpeed === 0)
        {
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }

    draw()
    {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
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
    gameFrame++

    requestAnimationFrame(animate)
}

animate()