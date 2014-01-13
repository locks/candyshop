macro .. {
	rule infix {
		$start:lit | $end:lit
	} => {
		(function (start, end) {
			var range = [];
			
			for (start; start <= end; start++) {
				range.push(start);
			}
			
			return range;
		})($start, $end)
	}
}
