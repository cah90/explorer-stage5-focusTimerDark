export function Sound({
  btnFlorestSound,
  btnRainSound,
  btnCoffeeShopSound,
  btnFireplaceSound

}) {
  const florestSound = new Audio("assets/florest.wav")
  const rainSound = new Audio("assets/rain.wav")
  const coffeeShopSound = new Audio("assets/coffeeShop.wav")
  const fireplaceSound = new Audio("assets/fireplace.wav")
  const buttonPresSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  

  florestSound.loop = true
  rainSound.loop = true
  coffeeShopSound.loop = true
  fireplaceSound.loop = true

  function buttonPressed() {
    buttonPresSound.play()
  }

  function timeEnded() {
    kitchenTimer.play()
  }

  function playFlorestSound() {
    btnFlorestSound.classList.contains("active") ||  btnFlorestSound.classList.contains("active-dark") ? 
      florestSound.play() : florestSound.pause() 
  }

  function playRainSound() {
    btnRainSound.classList.contains("active") ||  btnRainSound.classList.contains("active-dark") ? 
      rainSound.play() : rainSound.pause()
  }

  function playCoffeeShopSound() {
    btnCoffeeShopSound.classList.contains("active") ||  btnCoffeeShopSound.classList.contains("active-dark") ? 
      coffeeShopSound.play() : coffeeShopSound.pause()
  }

  function playFireplaceSound() {
    btnFireplaceSound.classList.contains("active") ||  btnFireplaceSound.classList.contains("active-dark") ? 
      fireplaceSound.play() : fireplaceSound.pause()
  }

  function setFlorestSoundVolume(value) {
    florestSound.volume = value / 100
  }

  function setRainSoundVolume(value) {
    rainSound.volume = value / 100
  }

  function setCoffeeShopSoundVolume(value) {
    coffeeShopSound.volume = value / 100
  }

  function setFireplaceSoundVolume(value) {
    fireplaceSound.volume = value / 100
  }


  return {
    buttonPressed,
    timeEnded,
    playFlorestSound,
    playRainSound,
    playCoffeeShopSound,
    playFireplaceSound,
    setFlorestSoundVolume,
    setRainSoundVolume,
    setCoffeeShopSoundVolume,
    setFireplaceSoundVolume
  }
}


