
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
    let novaTarefaEl = document.createElement('li'); 
    
    // 2. Configurando-lo (atributos, id, classes etc.)
    //add a classe item-tarefa
    novaTarefaEl.classList.add('item-tarefa');
    //add a classe categoria-NOME          
    novaTarefaEl.classList.add(`categoria-${tarefa.categoria}`);
    //add o nome ao HTML   
    novaTarefaEl.innerHTML = tarefa.nome;
    if (tarefa.realizada)
        novaTarefaEl.classList.add('marcado');
  
    // 3. Inserção do elemento na árvore DOM
    let containerEl = document.querySelector('#lista-tarefas');
    containerEl.appendChild(novaTarefaEl);
}

//Excluindo as tarefas existentes
let limparTarefasEl = document.querySelector('#lista-tarefas');
limparTarefasEl.innerHTML = '';

//Inserindo as tarefas na página
tarefas.forEach(insereTarefaNaPagina)

