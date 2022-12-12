input.onGesture(Gesture.LogoUp, function () {
    game.resume()
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("B B B - B B B - ", 120)
    music.playMelody("B C5 A C5 C5 - - - ", 137)
    music.playMelody("C5 C5 C5 - C5 C5 B B ", 137)
    music.playMelody("B B A A B A A - ", 137)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    1048,
    1,
    2,
    141,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), SoundExpressionPlayMode.InBackground)
    basic.pause(1000)
    a()
})
function a () {
    basic.showString("merry Xmas")
}
input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
})
input.onGesture(Gesture.LogoDown, function () {
    game.pause()
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
