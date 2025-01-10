let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showIcon(IconNames.SmallSquare)
        music.playTone(220, music.beat(BeatFraction.Whole))
    } else if (Hand == 2) {
        basic.showIcon(IconNames.Square)
        music.playTone(349, music.beat(BeatFraction.Double))
    } else {
        basic.showIcon(IconNames.Scissors)
        music.playTone(587, music.beat(BeatFraction.Whole))
    }
})
