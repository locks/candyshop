macro is {
	rule infix {
		$lhs | $rhs
	} => {
		$lhs === $rhs
	}
}

macro isnt {
	rule infix {
		$lsh | $rhs
	} => {
		$lhs !== $rhs
	}
}

macro not {
	rule {
		$expr
	} => {
		!$expr
	}
}

macro and {
	rule {
	} => {
		&&
	}
}

macro or {
	rule {
	} => {
		||
	}
}

macro yes {
	rule {
	} => {
		true
	}
}

macro on {
	rule {
	} => {
		true
	}
}

macro no {
	rule {} => {
		false
	}
}

macro off {
	rule {} => {
		false
	}
}

macro @ {
	rule { . } => {
		this.
	}
	rule {} => {
		this.
	}
}

export is;
export isnt;
export not;
export and;
export or;
export yes;
export on;
export no;
export off;
export @;
