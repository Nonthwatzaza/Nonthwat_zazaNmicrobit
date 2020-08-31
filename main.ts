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
    basic.showString("" + (input.compassHeading()))
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
