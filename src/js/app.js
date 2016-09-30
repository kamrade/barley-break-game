console.log('#app.js');

(function(){

var barleyBreak = {
	orderTemp: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
	cheatOrder: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,15],
	order: {},
	comp: {
		1:  [2,5],
		2:  [1,3,6],
		3:  [2,4,7],
		4:  [3,8],
		5:  [1,6,9],
		6:  [2,5,7,10],
		7:  [3,6,8,11],
		8:  [4,7,12],
		9:  [5,10,13],
		10: [6,9,11,14],
		11: [7,10,12,15],
		12: [8,11,16],
		13: [9,14],
		14: [10,13,15],
		15: [11,14,16],
		16: [12,15]
	},
	// touch
	touchstartX: 0,
	touchstartY: 0,
	touchendX: 0,
	touchendY: 0,
	iii: 0,
	
	
	init: function(){
		this.cacheDom();
		this.bindEvents();
		this.setBars(this._shuffle(this.orderTemp));
	},

	cacheDom: function(){
		this.$bar = $('.bar');
		this.$cheat = $('#cheat');
		this.$startNew = $('#start-new');
		this.$youWin = $('div.you-win-wrapper');
		this.$console = $('p.console');
	},

	bindEvents: function() {
		this.$bar.on('touchstart mousedown', this.moveBar.bind(this));
		this.$bar.on('click', this.moveBar.bind(this));
		this.$cheat.on('click', this.cheat.bind(this));
		this.$startNew.on('click', this.startNew.bind(this));
		this.$youWin.on('click', this.startNew.bind(this));
	},

	startNew: function() {
		this.$youWin.addClass('hidden');
		this.setBars(this._shuffle(this.orderTemp));
	},

	cheat: function(){
		this.setBars(this.cheatOrder);
	},

	setActive: function(emptyOrder){
		for(var i = 0; i < this.comp[emptyOrder].length; i++){
			$('.bar-' + this.comp[emptyOrder][i]).addClass('animated');
		}		
	},

	unsetActive: function(emptyOrder){
		for(var i = 0; i < this.comp[emptyOrder].length; i++){
			$('.bar-' + this.comp[emptyOrder][i]).removeClass('animated');
		}		
	},

	moveBar: function(event) {

		event.stopPropagation();
		event.preventDefault();


		// this.audioPlayer = document.createElement('audio');
		// this.audioPlayer.id = 'player';
		// document.body.appendChild(this.audioPlayer);
		// this.audioPlayer.src = 'dist/snd/pup_03_cut.wav'
		// this.audioPlayer.play();

		// this.audioPlayer.addEventListener('ended', function(){
		// 	var aP = document.getElementById('player');
		// 	aP.parentNode.removeChild(aP);
		// }, false);


		if(event.handled !== true) {
			
			var $click = $(event.target).closest('div');

			if ($click.text() == 16){
				console.log('This is empty bar');
			} else {

				var clickedOrder = this.order[$click.text()];
				var $empty = $('div.empty');
				var emptyOrder   = this.order[16];

				if(this._inArray(this.comp[clickedOrder], emptyOrder)){
					

					this.unsetActive(emptyOrder)

					$click.removeClass().addClass('bar').addClass('bar-' + emptyOrder);
					$empty.removeClass().addClass('bar').addClass('bar-' + clickedOrder).addClass('empty');
					
					this.order[16] = clickedOrder;
					this.order[$click.text()] = emptyOrder;
					this.setActive(clickedOrder);

				} else {
					console.log('false');
				}

				if (this.checkFinal()) {
					this.$youWin.removeClass('hidden');
				}
			}
			
      event.handled = true;

    } else {
      return false;
    }
	},

	setBars: function(tempArr){
		for (var i = 0; i < tempArr.length; i++){
			this.order[i + 1] = tempArr[i];
		}
		this.$bar.removeClass().addClass('bar');
		for (var i = 0; i < this.$bar.length; i++) {
			if ((i + 1) == 16) {
				$(this.$bar[i]).addClass('bar-' + this.order[i + 1]).addClass('empty');
				this.setActive(this.order[i + 1]);
			} else {
				$(this.$bar[i]).addClass('bar-' + this.order[i + 1]);
			}
		}
	},

	checkFinal: function(){
		for (var i = 1; i < 17; i++){
			if (this.order[i] != i) {
				return false;
			}
		}
		return true;
	},

//			------------------------
//							HELPERS
//			------------------------

	_inArray: function(arr, x) {
		for (var i = 0; i < arr.length; i++){
			if (arr[i] == x) {
				return true;
			}
		}
		return false;
	},

	_getRandomInt: function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	_shuffle: function(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
	},

};


barleyBreak.init();

})();



