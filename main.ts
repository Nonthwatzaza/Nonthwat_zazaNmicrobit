input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        # . . . #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else if (degrees < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        # . . . #
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        `)
})
let degrees = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # # . # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # . . . #
    . # . # .
    # . . . #
    . . . . .
    `)
basic.forever(function () {
	
})
