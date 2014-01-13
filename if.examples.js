console.log(4) if 5 < 4;
console.log(4) if (5 < 4);

function anon() {
	console.log("before");
	return 5 if (5 < 3);
	console.log("after");
}
