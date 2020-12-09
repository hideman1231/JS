const search = document.getElementsByClassName("search");
const btn = document.getElementsByClassName("btn");
const films = document.getElementsByClassName("film");

for (let i = 0; i < search.length; i++)
	btn[i].addEventListener("click", (event) => {
		let promes = fetch(`http://api.tvmaze.com/search/shows?q=${search[i].value}`);
	promes
		.then(response => {
			return response.json();
			})
		.then(item => {
			for (let j = 0; j < item.length; j++) {
				let image = document.createElement("img");
				image.src = item[j].show.image.medium;
				films[0].appendChild(image);
				let name = document.createElement("h2");
				name.innerText = item[j].show.name;
				films[0].appendChild(name);
			};
		})
		.catch(error => {
	 		console.log("all that I found");
	 	});
	});





