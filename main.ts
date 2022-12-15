input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        cuteBot.forward()
        basic.pause(200)
        cuteBot.motors(100, 40)
        basic.pause(1000)
        cuteBot.forward()
        basic.pause(200)
        cuteBot.forward()
        basic.pause(200)
        cuteBot.motors(40, 100)
        basic.pause(1000)
        cuteBot.forward()
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    cuteBot.stopcar()
})
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
