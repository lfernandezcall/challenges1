//Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter
function multTable(number) {
	var res = '';
	for (var i = 1; i <= 10; i++) {
		res += i*number + '\t';
	}
	return res;
}
multTable(6);