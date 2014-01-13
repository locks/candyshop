let if = macro {
	rule infix {
		return $body:expr | $predicate:expr
	} => {
		if ($condition) return $body
	}
	rule infix {
		$body:expr | $predicate:expr ;
	} => {
		if ($predicate) {
			$body
		}
	}
	rule infix {
		$body:expr | $predicate:expr (;)
	} => {
		$body if $predicate 
	}
	rule {} => { if }
}
