// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function max(strA, strB, strC) {
	if (strA.length === strB.length === strC.length) {
		return 'The strings are equal'
	} else if (strA.length > (strB.length || strC.length)) {
		return 'The largest string is: ' + strA
	} else  if (strB.length > (strA.length  || strC.length)) {
		return 'The largest string is: ' + strB
	} else  {
		return 'The largest string is: ' + strC
	}
}

//Juanma solved
function maxOfThree(a, b, c) {
	if (a > b && a > c) return a
	if (b > a && b > c) return b
	return c
}

//Brillinat solution
function maxOfThree(a, b, c) {
	return Math.max(a, b, c)
}