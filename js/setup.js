'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatsColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)]'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandom(array) {
  var rand = Math.floor(Math.random() * array.length);
  return (rand);
}


var wizards = [
  {
    name: surnames[getRandom(surnames)] + ' ' + names[getRandom(names)],
    coatColor: coatsColors[getRandom(coatsColors)],
    eyesColor: eyesColors[getRandom(eyesColors)]
  },
  {
    name: surnames[getRandom(surnames)] + ' ' + names[getRandom(names)],
    coatColor: coatsColors[getRandom(coatsColors)],
    eyesColor: eyesColors[getRandom(eyesColors)]
  },
  {
    name: surnames[getRandom(surnames)] + ' ' + names[getRandom(names)],
    coatColor: coatsColors[getRandom(coatsColors)],
    eyesColor: eyesColors[getRandom(eyesColors)]
  },
  {
    name: surnames[getRandom(surnames)] + ' ' + names[getRandom(names)],
    coatColor: coatsColors[getRandom(coatsColors)],
    eyesColor: eyesColors[getRandom(eyesColors)]
  }
]


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');