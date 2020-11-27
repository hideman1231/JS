let a = "";
let row = 5;
let column = 12;
for (let i = 0; i < row; i++ ) {
	a += "\n"
	for (let j = 0; j < column; j++) {
		if (i % 2 == 0) {
			if (j % 2 == 0) {
				a += "#"
			}
			else {
				a += "."
			};
		}
		else if (j % 2 == 0) {
			a += "."
		}
		else {
			a += "#"
		};
	};
};
console.log(a);