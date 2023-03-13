import {Events} from "./events.js"
import {Timer} from "./timer.js"
import {Sound} from "./sounds.js"
import {Controls} from "./controls.js"
import {
  btnFlorestSound,
  btnRainSound,
  btnCoffeeShopSound,
  btnFireplaceSound,
  btnPlay,
  btnPause,
  btnStop,
  btnAddition,
  btnSubtraction,
  body,
  btnLightMode,
  btnDarkMode,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const controls = Controls({
  btnFlorestSound,
  btnRainSound,
  btnCoffeeShopSound,
  btnFireplaceSound,
  btnPlay,
  btnPause,
  btnStop,
  btnAddition,
  btnSubtraction,
  body,
  btnLightMode,
  btnDarkMode
})

const configTimer = {
  minutesDisplay,
  secondsDisplay
}

const sound = Sound({
  btnFlorestSound,
  btnRainSound,
  btnCoffeeShopSound,
  btnFireplaceSound
})

const timer = Timer(configTimer, sound, controls)


Events({controls, sound, timer})

