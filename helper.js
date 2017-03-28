(function () {
	var b = {},bd = [],bmt =+ new Date() +50;
	b.w = window.screen.width || 0;
	b.h = window.screen.height || 0;
	b.r = ~~((window.devicePixelRatio || 1) * 100);
	do {
		var t,count=0,tt =+ new Date();
		do { t =+ new Date(); } while (t === tt)
		do { count++; tt= +new Date(); } while (t === tt)
		if ((tt-t) === 1) { bd[bd.length] = count; }
	} while ((bd.length < 20) && (t < bmt))
	if (bd.length == 0) b.m = 0; else b.m = Math.max.apply(Math, bd);
	var d = new Date(); d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
	var str = b.w + ":" + b.h + ":" + b.r + ":" + b.m;
	document.cookie = ("hd41=" + str + ";path=/;expires=" + d.toGMTString());
}());
