//TS recommend to use Interface over Types when possible


//Describe data structures in more natural way

//To describe function types
interface Person  {
	name: string;
	age: number;
}

// interface PersonLoggerFn {
// 	(name: string, age: number) : string; 
// }

type PersonLoggerFn = (name: string, age: number) => string; 

export default function play(){
	console.log("Hello World");

	const name: string = "John";
	const age: number = 30;

	const person = {
		name: "John",
		age: 30,
		
	}

	const logPersonInfo : PersonLoggerFn = (personName : string, personAge : number) : string =>{
		//const info = "Name: " + personName + ", Age: " + personAge;
		const info = `Name: ${personName}, Age: ${personAge}`;
		console.log(info);
		return info;
	} 

	function logPersonInfo2(person: Person){
		
		const info = `Name: ${person.name}, Age: ${person.age}`;
		console.log(info);
		
	}

	const log : number = logPersonInfo(name, age);
	logPersonInfo2(person);
	
}