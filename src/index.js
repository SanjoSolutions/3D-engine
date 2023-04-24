import { createFullDocumentCanvas } from "@sanjo/canvas"

const Y_AXIS_ANGLE = convertDegreeToRadian(-45)

function render(context, cube) {
  context.beginPath()

  context.moveTo(cube.x, cube.z)
  context.lineTo(cube.x + cube.width, cube.z)
  context.lineTo(cube.x + cube.width, cube.z + cube.height)
  context.lineTo(cube.x, cube.z + cube.height)
  context.closePath()


  context.moveTo(cube.x, cube.z)
  context.lineTo(
    cube.x + 0.5 * cube.depth * Math.cos(Y_AXIS_ANGLE),
    cube.z + 0.5 * cube.depth * Math.sin(Y_AXIS_ANGLE),
  )
  context.lineTo(cube.x +
    cube.width +
    0.5 *
    cube.depth *
    Math.cos(Y_AXIS_ANGLE), cube.z + 0.5 * cube.depth * Math.sin(Y_AXIS_ANGLE))
  context.lineTo(cube.x + cube.width, cube.z)
  context.closePath()


  context.moveTo(cube.x + cube.width, cube.z)
  context.lineTo(cube.x +
    cube.width +
    0.5 *
    cube.depth *
    Math.cos(Y_AXIS_ANGLE), cube.z + 0.5 * cube.depth * Math.sin(Y_AXIS_ANGLE))
  context.lineTo(
    cube.x +
    cube.width +
    0.5 *
    cube.depth *
    Math.cos(Y_AXIS_ANGLE),
    cube.z + cube.height + 0.5 * cube.depth * Math.sin(Y_AXIS_ANGLE),
  )
  context.lineTo(cube.x + cube.width, cube.z + cube.height)
  context.closePath()


  if (cube.color) {
    context.fillStyle = cube.color
    context.fill()
  }

  context.stroke()
}

function convertDegreeToRadian(value) {
  return value * (2 * Math.PI / 360)
}

const { context, canvas } = createFullDocumentCanvas()
document.body.append(canvas)

const cube = {
  width: 50,
  depth: 50,
  height: 50,
  x: 50,
  y: 0,
  z: 50,
}

render(context, cube)

const cube2 = {
  width: 50,
  depth: 50,
  height: 50,
  x: 150,
  y: 0,
  z: 50,
  color: "yellow",
}

render(context, cube2)
