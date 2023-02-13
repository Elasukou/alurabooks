function creatCompany(company) {
    return `
        <li class="baseboard-item">
            <img src="images/${company}.svg" alt="${company}">
            <a href="#" class="baseboard-list__link">${company}</a>
        </li>
    `
}

function creatList(companyAtuation, companies) {
    return `
        <ul class="baseboard-list">
            <li class="list-title">${companyAtuation}<li>
            ${companies}
        </ul>
    `
}

document.querySelector("#list__baseboard").innerHTML = 
    creatList("Educação", creatCompany("Caelum") + creatCompany("Casa do Código")) +

    creatList("Educação Online", creatCompany("Alura") + creatCompany("Alura Para Empresas") + creatCompany("Alura LATAM") + creatCompany("MusicDot") +creatCompany("Alura Língua") + creatCompany("PM3")) + 

    creatList("Comunidade", creatCompany("Hipsters ponto Tech") + creatCompany("Scuba Dev") + creatCompany("Layers ponto Tech") + creatCompany("Like a Boss") + creatCompany("Carreira sem Fronteira") + creatCompany("Hipsters ponto Jobs") + creatCompany("GUJ"))