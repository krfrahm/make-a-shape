const inquirer = require('inquirer')
const fs = require('fs')
const {Circle, Triangle, Square} = require('./lib/shapes.js')

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "color",
        message: "What color would you like your logo",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which shapeyou wouold like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

async function init() {
	var svgString = "";
	var svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);

	let user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		user_text = answers.text;
	} else {
		console.log("Invalid text, 1-3 characters only");
        return;
	}
	user_shape_color = answers.color;
	user_shape_type = answers["shape"];
	
	let user_shape;
	if (user_shape_type === "Square") {
		user_shape = new Square();
	}
	else if (user_shape_type === "Circle") {
		user_shape = new Circle();
	}
	else if (user_shape_type === "Triangle") {
		user_shape = new Triangle();
	}
	else {
		console.log("Invalid shape!");
	}
	user_shape.setColor(user_shape_color);

	const svg = new Svg();
	svg.setTextElement(user_text);
	svg.setShapeElement(user_shape);
	svgString = svg.render();
	

	console.log("Shape generation complete!");
	console.log("Writing shape to file...");
	writeToFile(svg_file, svgString); 
}
init()