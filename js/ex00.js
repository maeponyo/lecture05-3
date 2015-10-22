function check2(n){
	if (n % 2 == 0){
		return true;
	}
	return false
}

function check5(n){
	return n % 5 == 0;
}

function check10(n){
	var result;
	result = check2(n) && check5(n);
	return result
}