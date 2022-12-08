input.onButtonPressed(Button.A, function () {
    music.playMelody("D E D E C C - D ", 120)
    music.playMelody("C C C - - - - - ", 120)
    a()
})
function a () {
    basic.showString("merry Xmas")
}
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 C5 B C5 B B A A ", 120)
    basic.pause(200)
    music.playMelody("B C5 B B A A G G ", 137)
    basic.pause(200)
    music.playMelody("B C5 B B A A G G ", 137)
    basic.pause(200)
    music.playMelody("F F G A G F F - ", 137)
    a()
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . # # # .
        # # # # #
        `)
})
