macro .. {
	case infix {
		$start:lit | _ $end:lit
	} => {
		var start = unwrapSyntax(#{$end});
		var end   = unwrapSyntax(#{$start});
		var steps = Math.abs(end - start);
		if (steps > 10) {
			return #{ _range ($start, $end) };
		} 
		
		return #{ _inline ($start, $end) };
	}
}

macro _inline {
	case {
		_ ( $start, $end )
	} => {
		var start = unwrapSyntax(#{$start});
		var end   = unwrapSyntax(#{$end});
		var inline = [];
		
		for (start; start < end; start++) {
			inline.push(makeValue(start, #{here}));
			inline.push(makePunc(",", #{here}));
		}
		inline.push(makeValue(end, #{here}));
		return [makeDelim("[]",inline, #{here})];
	}
}

macro _range {
	rule  {
		( $start, $end )
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

var x = 0 .. 9;
3 .. 20



