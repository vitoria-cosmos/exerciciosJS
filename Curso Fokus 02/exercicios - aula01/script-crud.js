// encontrar botão adicionar tarefa 
const botaoAdicionarTarefa = document.querySelector('.app__button--add-task');
const formTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const tarefas = [];

botaoAdicionarTarefa.addEventListener('click', () => {
    formTarefa.classList.toggle('hidden');
})

formTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const novaTarefa = {
        tarefa: textArea.value
    }
    tarefas.push(novaTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
})

