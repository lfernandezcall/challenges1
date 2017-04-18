//Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code
function convertColor (num) {
	var colorR = parseInt(num.slice(1,3), 16)
	var colorG = parseInt(num.slice(2,4), 16)
	var colorB = parseInt(num.slice(4,6), 16)
	var colorName
	var resultRGBColor = "rgb(" + colorR + "," + colorB + "," + colorG + ")"

	switch(num) {
    case "#000000":
        colorName = "color is Black"
        break;
    case "#FFFFFF":
        colorName = "color is White"
        break;
    case "#FF0000":
	    colorName = "color is Red"
	    break;
	case "#00FF00":
        colorName = "color is Green"
        break;
    case "#0000FF":
	    colorName = "color is Blue"
	    break;
    default:
        colorName = "is not a basic color"
}	
	return "The result is: " + resultRGBColor + ", " + colorName
}