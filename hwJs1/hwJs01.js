let a = confirm();
while (a !== true) {
	if (a === true) {
		break;
	} 
	else {
		a = confirm();
	};
};