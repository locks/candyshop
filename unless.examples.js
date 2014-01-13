/*
 * Examples
 *
 */
 
 
unless (5 < 4) {
	console.log("hi");
	console.log("no no");
}

console.log("lol") unless (5 < 4);

function fun() {
	return 5 unless (5 < 4);
}

function fun() {
	console.log("before");
	unless (5 < 4) return 4;
	console.log("after");
}
