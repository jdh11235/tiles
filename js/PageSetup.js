function PageSetup () {
	this.preventTouchScrolling();
}

PageSetup.prototype.preventTouchScrolling = function () {
	document.addEventListener('touchmove', function(e){
		e.preventDefault();
	});
}
