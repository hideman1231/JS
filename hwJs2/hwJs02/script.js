const search = document.getElementsByClassName("search");
const btn = document.getElementsByClassName("btn");
const films = document.getElementsByClassName("film");
const names = document.getElementsByClassName("name");

for (let i = 0; i < search.length; i++)
	btn[i].addEventListener("click", (event) => {
		let promes = fetch(`http://api.tvmaze.com/search/shows?q=${search[i].value}`);
	promes
		.then(response => {
			return response.json();
			})
		.then(item => {
			for (let i = 0; i < films.length; i++)
				films[i].innerHTML = `<img src="${item[i].show.image.medium}">`;
			for (let i = 0; i < names.length; i++)
				names[i].innerHTML = `<h1>${item[i].show.name}</h1>`;
			});
	});





