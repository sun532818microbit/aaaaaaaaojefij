input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
})
function a () {
    basic.showString("merry Xmas")
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("B B B - B B B - ", 120)
    music.playMelody("B C5 A C5 C5 - - - ", 137)
    music.playMelody("C5 C5 C5 - C5 C5 B B ", 137)
    music.playMelody("F F G A G F F - ", 137)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1048, 1, 2, 141, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
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
