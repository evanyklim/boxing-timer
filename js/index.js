(function () {

	var _round = 240,   // total round time
	_final = 90,
	_rest = 60,
	_count,
	_interval = null,
	_label = document.getElementById('time-label'),
	_red = document.getElementById('red-light'),
	_yellow = document.getElementById('yellow-light'), 
	_green = document.getElementById('green-light');

	function start () {
		if (_count === _round) {
			change(_green);
		}
		_interval = setInterval(function() {
		    _label.textContent = convert(--_count);
		    if (_count === _final) {
		    	change(_green, _yellow);
		    }
		    if (_count === _rest) {
		    	change(_red, _yellow);
		    }
		    if (_count < 0) {
		    	reset()
		        start();
		    }
		}, 1000);
	}

	function clear () {   // clear timer
		if (_interval) {
			clearInterval(_interval);
			_interval = null;
		}
	}

	function change () {   // toggle lights
		[].slice.call(arguments).map(function (el) {
			el.classList.toggle('inactive');
		});		
	}

	function reset () {
		clear();
		_count = _round;
		_label.textContent = convert(_count);
		[_red, _yellow, _green].map(function (el) {
			el.classList.add('inactive');
		});
	}

	function convert (time) {
	   	var minutes = "0" + Math.floor(time / 60);
	    var seconds = "0" + (time - minutes * 60);
	    return minutes.substr(-2) + ":" + seconds.substr(-2);
	}

	_count = _round;
	_label.textContent = convert(_count);
	document.getElementById('start-button').addEventListener('click', start);
	document.getElementById('stop-button').addEventListener('click', clear);
	document.getElementById('reset-button').addEventListener('click', reset);
})();