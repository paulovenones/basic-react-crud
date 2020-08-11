import React from "react";

import api from "../../services/api";
import { useHistory } from "react-router-dom";

import "./styles.css";

export interface Client {
  username: string;
  birth_date: string;
  cpf: string;
  number: string;
  email: string;
  address: string;
  note: string;
  id:number,
}

interface ClientItemProps {
  client: Client;
}

const ClientItem: React.FC<ClientItemProps> = ({ client }) => {
  const history = useHistory();

  function handleUpdateButton() {
    history.push({
      pathname: `/update-client/${client.id}`,
      state: {
        username: client.username,
        birth_date: client.birth_date,
        cpf: client.cpf,
        number: client.number,
        email: client.email,
        address: client.address,
        note: client.note,
        id: client.id,
      }
    })
  }

  function handleDeleteButton() {
    api.delete(`users/${client.id}`)
    .then(() => {
      alert('Cadastro deletado com sucesso');

      history.go(0);
    }).catch(() => {
      alert('Erro ao deletar usuário!')
    });
  }

  return (
    <article className="client-item">
      <header>
        <div>
          <strong>{client.username}</strong>
          <span>{client.email}</span>
        </div>
      </header>

      <main>
        <div>
          <strong>CPF</strong>
          <p>{client.cpf}</p>
        </div>
        <div>
          <strong>Celular</strong>
          <p>{client.number}</p>
        </div>
        <div>
          <strong>Data de nascimento</strong>
          <p>{client.birth_date}</p>
        </div>
      </main>

      { client.note ? 
        (<div className="note-block">
          <strong>Observação</strong>
          <p>{client.note}</p>
        </div>)
        : ''
      }

      <footer>
        <a 
          href={`/update-client/${client.id}`}
          onClick={handleUpdateButton}
          id="update-button" 
          type="button"
        >Editar dados</a>
        <a 
          onClick={handleDeleteButton}
          id="delete-button" 
          type="button"
        >Excluir</a>
      </footer>
    </article>
  );
};

export default ClientItem;
