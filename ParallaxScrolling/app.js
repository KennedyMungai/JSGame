const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 5

const backgroundLayer1 = new Image()
backgroundLayer1.src = './images/background/layer-1.png'
const backgroundLayer2 = new Image()
backgroundLayer1.src = './images/background/layer-2.png'
const backgroundLayer3 = new Image()
backgroundLayer1.src = './images/background/layer-3.png'
const backgroundLayer4 = new Image()
backgroundLayer1.src = './images/background/layer-4.png'
const backgroundLayer5 = new Image()
backgroundLayer1.src = './images/background/layer-5.png'

const animate = () =>
{
    drawImage(backgroundLayer1, 0, 0)

    requestAnimationFrame(animate)
}