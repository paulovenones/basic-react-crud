import React, { useState, useEffect, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import ClientItem, { Client } from "../../components/ClientItem";
import Pagination from "../../components/Pagination";

import api from "../../services/api";

import "./styles.css";


function ClientList() {
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(10);
  let currentClients: Array<Client> = [];

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await api.get('users');
      setClients(res.data);
    }

    fetchUsers();
  }, []);

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  
  const [filterContent, setFilterContent] = useState('');
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  async function searchClients(e: FormEvent) {
    e.preventDefault();
    
    const response = await api.get("users");
    setClients(response.data);
  }
  
  const filteredClients: Array<Client> = [];
  

  return (
    <div id="page-client-list" className="container">
      <PageHeader />
      <div className="filter-block">
        <form id="search-clients" onSubmit={searchClients}>
          <Input
            type="text"
            name="filter"
            label="Pesquisar clientes"
            placeholder="Adicone um filtro"
            value={filterContent}
            onChange={(e) => {
              setFilterContent(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </div>

      <main>
        {clients.map((client: Client) => {
          if (
            client.username.includes(filterContent) ||
            client.email.includes(filterContent) ||
            client.cpf.includes(filterContent) ||
            client.number.includes(filterContent) ||
            client.birth_date.includes(filterContent)
          ) {
            filteredClients.push(client);
            currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient)
            // return <ClientItem key={client.id} client={client} />;
          }
        })}
        {currentClients.map((client: Client) => {
          return <ClientItem key={client.id} client={client} />;
        })}
      </main>

      <footer>
        <Pagination 
          clientsPerPage={clientsPerPage} 
          totalClients={filteredClients.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </footer>
    </div>
  );
}

export default ClientList;
