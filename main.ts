radio.onReceivedValue(function (name, value) {
    if (name.compare("mgy") == 0) {
        backward = value
    }
    if (name.compare("mgx") == 0) {
        right = value
    }
    right_motor = -1 * (backward - right)
    left_motor = -1 * (backward + right)
})
let left_motor = 0
let right_motor = 0
let right = 0
let backward = 0
radio.setGroup(1)
basic.showIcon(IconNames.House)
basic.forever(function () {
    if (left_motor > 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, Math.abs(left_motor))
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P0, Math.abs(left_motor))
    }
    if (right_motor > 0) {
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P8, Math.abs(right_motor))
    } else {
        pins.analogWritePin(AnalogPin.P8, 0)
        pins.analogWritePin(AnalogPin.P2, Math.abs(right_motor))
    }
})
