basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
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
})
