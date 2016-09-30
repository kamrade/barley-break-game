console.log('#testJS');

// тест на скорость выполнения
// this.start = new Date().getTime();

		// for (var i = 0; i < 1000; i++) {
		//     ... code test ...			
		// }

// this.elapsed = new Date().getTime() - barleyBreak.start;
// console.log('Buit in ' + this.elapsed + 'ms');
// this.$console.text('Buit in ' + this.elapsed + 'ms');


var testing = {

	assert: function( value, desc ) {
		var li = document.createElement('li');
		li.className = value ? 'pass' : 'fail';
		li.appendChild( document.createTextNode( desc ) );
		document.getElementById('results').appendChild( li );
	},



};

window.onload = function() {

	testing.assert( true, 'Test' );
	testing.assert( true, 'Test Again' );
	testing.assert( false, 'Fail' );

};





// групповой тест
// (function(){
	
// 	var results;
	
// 	this.assert = function assert( value, desc ) {
// 		var li = document.createElement('li');
// 		li.className = value ? 'pass' : 'fail';
// 		li.appendChild(document.createTextNode(desc));
// 		results.appendChild(li);
// 		if (!value) {
// 			li.parentNode.parentNode.className = 'fail';
// 		}
// 		return li;
// 	};

// 	this.test = function test( name, fn ){
// 		results = document.getElementById('results');
// 		results = assert( true, name ).appendChild(document.createElement('ul'));
// 		fn();
// 	};

// })();

// assert(true, 'Test');


// window.onload = function() {
// 	test('A test.', function(){
// 		assert(true, 'First assertion completed');
// 		assert(true, 'Second assertion completed');
// 		assert(true, 'Third assertion completed');
// 	});
// 	test('Another test.', function(){
// 		assert(true, 'First test completed');
// 		assert(false, 'Second test failed');
// 		assert(true, 'Third assertion completed');
// 	});
// 	test('A third test', function(){
// 		assert(null, 'Fail');
// 		assert(5, 'Pass');
// 	});
// }



