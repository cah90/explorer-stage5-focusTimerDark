
export function Timer(configTimer, sound, controls) {

  let {minutesDisplay, secondsDisplay} = configTimer
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)


  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes  === undefined ? minutes : newMinutes
    seconds = seconds  === undefined ? 0 : seconds

    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)
  
      if (isFinished) {
        //resetControls()
        updateDisplay(minutes, 0)
        sound.timeEnded()
        controls.timeEnded()
        return
      }
  
      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function pause() {
    clearTimeout(timerTimeOut)

  }

  function addMinutes() {
    minutes += 5
    reset()
}

  function removeMinutes() {
    minutes >= 5 ? minutes -= 5 : minutes = 0
    reset()
}

  return {
    countdown, reset, updateDisplay, updateMinutes, pause, addMinutes, removeMinutes
  }

}


