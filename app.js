function pesquisar() {
    // Obtém a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.

    if (campoPesquisa == "") {
      section.innerHTML = "Não há resultados para sua busca" 
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "" ;
    let titulo = "" ; 
    let descricao = "" ;
  
    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos).
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
      }
    }
    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
  }