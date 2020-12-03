let a = confirm();
while (!a) {
	if (a) {
		break;
	} 
	else {
		a = confirm();
	};
};