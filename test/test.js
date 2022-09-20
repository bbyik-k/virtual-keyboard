let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for (let i = 0; i < keys.length; i++) {
  keys[i].setAttribute('keyname', keys[i].innerText);
  keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function (e) {
  // console.debug(`keydown`);
  // console.debug(e);
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.add('active')
    }
    if (e.code == 'Space') {
      spaceKey.classList.add('active')
    }
    if (e.code == 'ShiftLeft') {
      shift_right.classList.remove('active')
    }
    if (e.code == 'ShiftRight') {
      shift_left.classList.remove('active')
    }
    if (e.code == 'CapsLock') {
      caps_lock_key.classList.toggle('active');
    }
  }
})

window.addEventListener('keyup', function (e) {
  // console.debug(`keyup@@@`);
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
      keys[i].classList.remove('active')
      keys[i].classList.add('remove')
    }
    if (e.code == 'Space') {
      spaceKey.classList.remove('active');
      spaceKey.classList.add('remove');
    }
    if (e.code == 'ShiftLeft') {
      shift_right.classList.remove('active')
      shift_right.classList.remove('remove')
    }
    if (e.code == 'ShiftRight') {
      shift_left.classList.remove('active')
      shift_left.classList.remove('remove')
    }
    setTimeout(() => {
      keys[i].classList.remove('remove')
    }, 200)
  }
})


night_mode.addEventListener('click', function () {
  toggle_circle.classList.toggle('active');
  body.classList.toggle('active');
  night_mode.classList.toggle('active');
  keyboard_wrapp.classList.toggle('active');
  text_input.classList.toggle('active');
  change_color.classList.toggle('active');
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.toggle('keys_night')
  }
})

colors_input.addEventListener('input', function () {
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.color = colors_input.value
  }
  keyboard_lights.style.background = colors_input.value;
})

setKeyboardClick();

function setKeyboardClick() {
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', (e) => onKeyboardClick(e));
    // if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
    //   keys[i].classList.remove('active')
    //   keys[i].classList.add('remove')
    // }
    // if (e.code == 'Space') {
    //   spaceKey.classList.remove('active');
    //   spaceKey.classList.add('remove');
    // }
    // if (e.code == 'ShiftLeft') {
    //   shift_right.classList.remove('active')
    //   shift_right.classList.remove('remove')
    // }
    // if (e.code == 'ShiftRight') {
    //   shift_left.classList.remove('active')
    //   shift_left.classList.remove('remove')
    // }
    // setTimeout(() => {
    //   keys[i].classList.remove('remove')
    // }, 200)
  }
}

const letters = document.querySelectorAll('.letter');
const toggleKey = document.querySelector('.toggle_key');

let sentence = "";
let LANG_TYPE = true;

function onKeyboardClick(e) {
  // console.debug(e);  
  console.debug(e.target.attributes);
  console.debug(e.target.attributes.class.ownerElement.innerHTML);
  console.debug(e.target.attributes.keyname.value);
  console.debug(e.target.attributes.class.ownerElement.classList[1]);
  // const selKeyValue = e.target.attributes.keyname.value;
  const selKeyValue = e.target.attributes.class.ownerElement.innerHTML;
  const selKeyType = e.target.attributes.class.ownerElement.classList[1];
  if (selKeyType == "backspace_key") {
    sentence = sentence.slice(0, -1);
  } else if (selKeyType == "toggle_key") {
    setKeysLetter();
  } else {
    sentence += selKeyValue;
    sentence = Hangul.disassemble(sentence);
    sentence = Hangul.assemble(sentence);
  }
  // document.getElementsByClassName("address")[0].childNodes[0].innerHTML = addressee;

  // text_input.value += e.target.attributes.keyname.value;
  text_input.value = sentence;
}

// toggleKey.addEventListener('click', setKeysLetter);

function setKeysLetter() {
  if (LANG_TYPE) {
    letters.forEach((ele, idx) => {
      ele.innerHTML = letterObj["en-us"][idx];
    });
    LANG_TYPE = false;
  } else {
    letters.forEach((ele, idx) => {
      ele.innerHTML = letterObj["ko-kr"][idx];
    });
    LANG_TYPE = true;
  }
}