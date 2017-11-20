window.renderStatistics = function(ctx, names, times) {

		ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
		ctx.fillRect(110, 20, 420, 270);

		ctx.fillStyle = 'rgba(255, 255, 255, 1)';
		ctx.fillRect(100, 10, 420, 270);

		ctx.fillStyle = '#000';
	  	ctx.font = '16px PT Mono';

	  	ctx.fillText('Ура вы победили!', 120, 40);
	  	ctx.fillText('Список результатов:', 120, 60);


	  var max = -1;
	  var maxIndex = -1;

	  for (var i = 0 ; i < times.length; i++) {
	    var time = times[i];
	    if (time > max) {
	      max = time;
	      maxIndex = i;
	    }
	  }
	  
	  
	  var histogramHeight = 150;
	  var step = histogramHeight * (max - 150);

	  var barWidth = 40; // px; 
	  var indent = 90;    // px;
	  var initialX = 120; // px;
	  var initialY = 230;  // px;
	  var lineHeight = 16;// px;

	  for (var i = 0; i < times.length; i++) {

	  	ctx.fillStyle = 'rgba(255, 0, 0, 1)';

	  	//ctx.fillStyle = 'rgba('255, 0, 0, Math.random()')';   Как правильно записывать рандомную прозрачность?

	  	ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);

	  	ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    	ctx.fillText(names[i], initialX + indent * i, initialY - 10);

    	ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    	ctx.fillText(Math.floor(times[i]), initialX + indent * i, times[i] * step * 2 + 20);
	  }

	  
	  /*ctx.fillStyle = 'rgba(255, 0, 0, 1)';
	  ctx.fillRect(120, 150, barWidth, times[0] * step);

	  ctx.fillStyle = 'rgba(2, 14, 144, 1)';
	  ctx.fillRect(210, 150, barWidth, times[1] * step);

	  ctx.fillStyle = 'rgba(2, 14, 144, 1)';
	  ctx.fillRect(300, 150, barWidth, times[2] * step);

	  ctx.fillStyle = 'rgba(2, 14, 144, 1)';
	  ctx.fillRect(390, 150, barWidth, times[3] * step);*/
	}