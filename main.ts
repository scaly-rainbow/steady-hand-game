input.onGesture(Gesture.LogoUp, function () {
    run = false
    music.rest(music.beat(BeatFraction.Sixteenth))
})
input.onGesture(Gesture.ScreenDown, function () {
    if (!(run)) {
        run = true
        music.playTone(523, music.beat(BeatFraction.Quarter))
    }
})
let run = false
music.playTone(262, music.beat(BeatFraction.Sixteenth))
basic.forever(function () {
    if (run) {
        if (Math.abs(input.acceleration(Dimension.X)) > 500) {
            music.ringTone(262)
        }
    }
})
