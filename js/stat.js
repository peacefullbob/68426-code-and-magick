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
	  var step = histogramHeight / (max - 0);

	  var barWidth = 40; // px; 
	  var indent = 90;    // px;
	  var initialX = 120; // px;
	  var initialY = 150;  // px;
	  var lineHeight = 16;// px;

	  for (var i = 0 ; i < times.length; i++) {
	  	if (i < 1) {
	  	ctx.fillStyle = '#FC0D1B';
	  	} else {
	  	ctx.fillStyle = '#020E86'; 
	  	ctx.globalAlpha = Math.random(0, 1); 
	  	}

	    ctx.fillRect(initialX + indent * i, 260 - times[i] * step - 10, barWidth, times[i] * step);

	  	ctx.fillStyle = '#000';
    	ctx.fillText(names[i], initialX + indent * i, 270);

    	ctx.fillStyle = '#000';
    	ctx.fillText(Math.floor(times[i]), initialX + indent * i, 260 - times[i] * step - 20);
	  }
	}