input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        -255,
        robotbit.Motors.M2A,
        -255
        )
        basic.pause(100)
    }
    if (receivedString == "backward") {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        255,
        robotbit.Motors.M2A,
        255
        )
        basic.pause(100)
    }
    if (receivedString == "right") {
        robotbit.MotorRun(robotbit.Motors.M1A, 255)
    }
    if (receivedString == "left") {
        robotbit.MotorRun(robotbit.Motors.M2A, 255)
    }
    if (receivedString == "red") {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (receivedString == "blue") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (receivedString == "yellow") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (receivedString == "green") {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (receivedString == "middle") {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (receivedString == "high") {
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
    if (receivedString == "rainbow") {
        strip.showRainbow(1, 360)
    }
    robotbit.MotorStopAll()
})
let b_ij = 0
let strip: neopixel.Strip = null
radio.setGroup(255)
strip = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
basic.forever(function () {
    b_ij = sonar.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    basic.showString("" + (b_ij))
    if (20 < b_ij) {
        music.playMelody("C5 B A G F E D C ", 120)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            # . . . #
            . . # . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
