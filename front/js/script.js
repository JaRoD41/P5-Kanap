let zoneKanaps = document.getElementById("items"); //je définis une variable dans la zone concernée par l'injection du HTML dynamique

fetch("http://localhost:3000/api/products/") //requete de l'API afin d'importer les données des canapés
	.then((res) => res.json()) //conversion des données reçues en format JSON exploitable par js
	.then((data) => {
		//les données JSON sont nommées "data" pour être exploitées en tant que tableau
		for (let champ of data) {
			//boucle pour importer chaque champ du JSON et lui attribuer une variable
			let idKanap = champ._id;
			let photoKanap = champ.imageUrl;
			let altTexte = champ.altTxt;
			let nomKanap = champ.name;
			let speechKanap = champ.description;
			zoneKanaps.innerHTML += `<a href="./product.html?id=${idKanap}">
        <article>
          <img src="${photoKanap}" alt="${altTexte}">
            <h3 class="productName">${nomKanap}</h3>
            <p class="productDescription">${speechKanap}</p>
        </article>
    </a>`; //les photos et infos des canapés sont insérées dynamiquement dans l'HTML de la page d'accueil
		}
	})
	.catch(function (err) {
		console.log(err);
	});








