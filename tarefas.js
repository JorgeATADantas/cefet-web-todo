
//Exercício 0: Representar tarefas
//tarefa é uma lista de objetos
let tarefas =  [
    {
        nome:       'Comprar leite',
        categoria:  'compras',
        realizada:  false
    },
    {
        nome:       'Escutar Chimbinha',
        categoria:  'lazer',
        realizada:  true
    },
    {
        nome:       'Fazer trabalho de BD',
        categoria:  'estudos',
        realizada:  false
    }
];

//Exercício 1: Carregar tarefas existentes

//Criando a função insereTarefaNaPagina 
function insereTarefaNaPagina(tarefa){
    // 1. Solicitamos ao document a criação de um elemento
    let tarefaEl = document.createElement('li'); 
    
    // 2. Configurando-lo (atributos, id, classes etc.)
    //add a classe item-tarefa
    tarefaEl.classList.add('item-tarefa');
    //add a classe categoria-NOME          
    tarefaEl.classList.add(`categoria-${tarefa.categoria}`);
    //add o nome ao HTML   
    tarefaEl.innerHTML = tarefa.nome;
    if (tarefa.realizada)
        tarefaEl.classList.add('marcado');
  
    // 3. Inserção do elemento na árvore DOM
    let containerEl = document.querySelector('#lista-tarefas');
    containerEl.appendChild(tarefaEl);
}

//Excluindo as tarefas existentes
let limparTarefasEl = document.querySelector('#lista-tarefas');
limparTarefasEl.innerHTML = '';

//Inserindo as tarefas na página
tarefas.forEach(insereTarefaNaPagina);

//Exercício 2: Incluir uma nova tarefa
function insereNovaTarefa(){
    let nomeNovaTarefaE1            = document.querySelector('#nova-tarefa-nome');
    let nomeNovaTarefaValor         = nomeNovaTarefaE1.value;
    let categoriaNovaTarefaE1       = document.querySelector('#nova-tarefa-categoria');
    let categoriaNovaTarefaValor    = categoriaNovaTarefaE1.value;
    let realizadaNovaTarefaE1       = false;

    //Monta a tarefa
    let tarefa = {
        nome:       nomeNovaTarefaValor,
        categoria:  categoriaNovaTarefaValor,
        realizada:  realizadaNovaTarefaE1
    };

    //Adiciona na lista de tarefas
    tarefas.push(tarefa);

    //Adiciona na página
    insereTarefaNaPagina(tarefa);

    //Apaga campo
    nomeNovaTarefaE1.value = '';

    //Puxar o foco
    nomeNovaTarefaE1.focus();
}

// Clicar no botão + para adicionar a tarefa
let botaoAdicionar = document.querySelector('#incluir-nova-tarefa');
botaoAdicionar.addEventListener('click', insereNovaTarefa);