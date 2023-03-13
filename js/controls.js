export function Controls({
  btnFlorestSound,
  btnRainSound,
  btnCoffeeShopSound,
  btnFireplaceSound,
  btnPlay,
  btnPause,
  btnStop,
  btnLightMode,
  btnDarkMode
}) {

  function play() {
    btnPlay.classList.add('btn-active')
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnPause.classList.add('btn-active')
    btnStop.classList.remove('btn-active')
  }
  
  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')

  }

  function stop() {
    btnPlay.classList.remove('btn-active')
    btnPlay.classList.remove('hide')
    btnPause.classList.remove('btn-active')
    btnPause.classList.add('hide')
    btnStop.classList.add('btn-active')
  }

  function timeEnded() {
    btnPause.classList.remove('btn-active')
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnPlay.classList.remove('btn-active')
    btnStop.classList.add('btn-active')

  }

  function florestSoundBackground() {
    body.classList.contains("active-mode-dark") ? 
      btnFlorestSound.classList.toggle("active-dark") : btnFlorestSound.classList.toggle("active")
  }


  function rainSoundBackground() {
    body.classList.contains("active-mode-dark") ? 
      btnRainSound.classList.toggle("active-dark") : btnRainSound.classList.toggle("active")

  }

  function coffeeShopSoundBackground() {
    body.classList.contains("active-mode-dark") ? 
      btnCoffeeShopSound.classList.toggle("active-dark") : btnCoffeeShopSound.classList.toggle("active")

  }

  function fireplaceSoundBackground() {
    body.classList.contains("active-mode-dark") ? 
      btnFireplaceSound.classList.toggle("active-dark") : btnFireplaceSound.classList.toggle("active")

  }

  function changeMode() {
    body.classList.toggle("active-mode-dark")
    btnLightMode.classList.toggle("hide")
    btnDarkMode.classList.toggle("hide")
  }



  return {
    play,
    pause,
    stop,
    timeEnded,
    florestSoundBackground,
    rainSoundBackground,
    coffeeShopSoundBackground,
    fireplaceSoundBackground,
    changeMode
  }
}