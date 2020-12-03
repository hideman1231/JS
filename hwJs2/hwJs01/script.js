const search = document.getElementsByClassName("search");
const btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++)
	btn[i].addEventListener("click", (event) => {
		let zapros = fetch(`http://api.tvmaze.com/search/shows?q=${search[i].value}`);
		zapros
			.then(response => {
				return response.json()
			})
			.then(item => {
				console.log(item)
			});
});