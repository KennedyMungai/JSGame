/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 700

ctx.fillStyle = 'white'
ctx.fillRect(50, 50, 100, 150)

const explosions = []