window.renderStatistics = function (ctx, names, times) {
  var drawRect = function (x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');

  drawRect(100, 10, 420, 270, 'rgba(255, 255, 255, 1)');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);


  var max;
  max = -1;

  var getMaxElement = function (array) {
    for (var i = 0; i < array.length; i++) {
      var time = array[i];
      if (time > max) {
        max = time;
      }
    }
  };

  getMaxElement(times);

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  var barWidth = 40; // px;
  var indent = 90; // px;
  var initialX = 120; // px;

  var drawHistogramRect = function (x, y, width, height) {
    ctx.fillRect(x, y, width, height);
  };

  var drawText = function (array, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillText(array, x, y);
  };
  for (var i = 0; i < times.length; i++) {
    if (i < 1) {
      ctx.fillStyle = '#FC0D1B';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 0, Math.random(1, 0))';
    }

    drawHistogramRect(initialX + indent * i, 260 - times[i] * step - 10, barWidth, times[i] * step);

    drawText(names[i], initialX + indent * i, 270, '#000');

    drawText(Math.floor(times[i]), initialX + indent * i, 260 - times[i] * step - 20, '#000');
  }
};

