'use strict';

var HISTOGRAM_HEIGHT = 150;
var BAR_WIDTH = 40;
var INDENT = 90;
var INITIAL_X = 120;

window.renderStatistics = function (ctx, names, times) {
  var drawRect = function (x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  var drawText = function (contentText, x, y, color, fontStyle) {
    ctx.fillStyle = color;
    ctx.font = fontStyle;
    ctx.fillText(contentText, x, y);
  };

  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(100, 10, 420, 270, 'rgba(255, 255, 255, 1)');
  drawText('Ура вы победили!', 120, 40, '#000', '16px PT Mono');
  drawText('Список результатов:', 120, 60, '#000', '16px PT Mono');

  var getMaxElement = function (array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
      var time = array[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  };

  var max = getMaxElement(times);
  var STEP = HISTOGRAM_HEIGHT / max;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(2, 14, 134,' + Math.random() + ')';
    }

    drawRect(INITIAL_X + INDENT * i, 260 - times[i] * STEP - 10, BAR_WIDTH, times[i] * STEP);
    drawText(names[i], INITIAL_X + INDENT * i, 270, '#000');
    drawText(Math.floor(times[i]), INITIAL_X + INDENT * i, 260 - times[i] * STEP - 20, '#000');
  }
};

