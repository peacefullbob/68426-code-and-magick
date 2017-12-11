'use strict';

var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandom(number) {
  return Math.floor(Math.random() * number);
}

function getWizards() {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: surnames[getRandom(surnames.length)] + ' ' + names[getRandom(names.length)],
      coatColor: coatsColors[getRandom(coatsColors.length)],
      eyesColor: eyesColors[getRandom(eyesColors.length)]
    });
  }
  return wizards;
}

var wizards = getWizards();

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupWizard = document.querySelector('.setup-wizard');
var coatColor = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');

function changeColor(elementOnPage, array) {
  var element = array[getRandom(array.length)];
  elementOnPage.style.fill = element;
  return element;
}

function openPopup(popup) {
  return popup.classList.remove('hidden');
}

function closePopup(popup) {
  return popup.classList.add('hidden');
}

setupOpen.addEventListener('click', function () {
  openPopup(setup);
});

setupClose.addEventListener('click', function () {
  closePopup(setup);
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup(setup);
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup(setup);
  }
});

coatColor.addEventListener('click', function () {
  var colorsCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
  changeColor(coatColor, colorsCoats);
});

wizardEyes.addEventListener('click', function () {
  var wizardsEyes = ['black', 'red', 'blue', 'yellow', 'green'];
  changeColor(wizardEyes, wizardsEyes);
});

setupFireball.addEventListener('click', function () {
  var faerballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var element = faerballColors[getRandom(faerballColors.length)];
  setupFireball.style.background = element;
  return element;
});
