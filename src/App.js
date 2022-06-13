import React, { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [listToDo, setListToDo] = useState([]);
  const [numeroDeTarefas, setNumeroDeTarefas] = useState();

  function capturarTarefa() {
    const tarefa = inputRef.current.value;
    if (!tarefa) {
      alert("Preencha o campo de tarefa.");
    }
    setListToDo((prevLista) => [...prevLista, tarefa]);
    inputRef.current.value = "";
  }

  function excluirTarefa(paramIndex) {
    const toDoAtt = listToDo.filter(
      (prevOldLista, index) => index !== paramIndex
    );
    setListToDo(toDoAtt);
  }

  function editarTarefa(indexEditar) {
    const toDoEdit = listToDo.map((prevItem, indexItem) => {
      if (indexEditar === indexItem) {
        var itemEdit = prompt("Edite sua tarefa:");
        return itemEdit;
      }
      return prevItem;
    });
    setListToDo(toDoEdit);
  }

  function clickEnter(event) {
    if (event.key === "Enter") capturarTarefa();
  }

  useEffect(() => {
    setNumeroDeTarefas(listToDo.length);
  }, [listToDo]);

  return (
    <div className="corpo">
      <header className="cabecalho">
        <div>To Do List</div>
      </header>
      <div className="content">
        <div className="writeWork">
          <label htmlFor="tarefaID">Escreva uma tarefa</label>
          <input
            type="text"
            className="inputTarefa"
            id="tarefaID"
            ref={inputRef}
            onKeyDown={clickEnter}
          />
        </div>
        <div className="botao">
          <button className="btn addTarefa" onClick={capturarTarefa}>
            Adicionar Tarefa
          </button>
        </div>
        <div className="todoList">
          <div className="listaGerada">
            {listToDo.map((list, index) => (
              <div className="itemGerado">
                <span>Tarefa:</span>
                <div key={index}>{list}</div>
                <button
                  className="btn excluir"
                  onClick={() => excluirTarefa(index)}
                >
                  Excluir
                </button>
                <button
                  className="btn editar"
                  onClick={() => editarTarefa(index)}
                >
                  Editar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
