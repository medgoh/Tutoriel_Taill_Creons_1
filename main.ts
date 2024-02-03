input.onButtonPressed(Button.A, function () {
    record.setSampleRate(1000)
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    record.setSampleRate(22000)
    record.playAudio(record.BlockingState.Blocking)
})
