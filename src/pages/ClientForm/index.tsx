import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import InputMask from "../../components/InputMask";

import "./styles.css";

function ClientForm() {
  const history = useHistory();
  const nameFormat = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  const numberFormat = /^\((\d{2})\) 9[0-9]{4}-[0-9]{4}$/;

  const schema = Yup.object().shape({
    name: Yup.string().required("Informe o nome!").matches(nameFormat),
    birth_date: Yup.date().required("Informe a data de nascimento!"),
    cpf: Yup.string().required("Informe o CPF!"),
    number: Yup.string().required("Informe o número!").matches(numberFormat),
    email: Yup.string()
      .email("Informe um e-mail válido!")
      .required("Informe o email!"),
    address: Yup.string().required("Informe o endereço!"),
    note: Yup.string().max(300).notRequired(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      birth_date: "",
      cpf: "",
      number: "",
      email: "",
      address: "",
      note: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      api.post('users', {
        username: values.name,
        birth_date: values.birth_date,
        cpf: values.cpf,
        number: values.number,
        email: values.email,
        address: values.address,
        note: values.note
      }).then(() => {
        alert('Cadastro realizado com sucesso!');
  
        history.push('/');
      }).catch(() => {
        alert('Erro no cadastro!');
      });
    },
  });

  return (
    <div id="page-client-form" className="container">
      <PageHeader />
      <main>
        <div className="form-content">
          <main>
            <form onSubmit={formik.handleSubmit}>
              <fieldset>
                <legend>Seus dados</legend>

                <Input
                  name="name"
                  label="Nome"
                  placeholder="Digite seu nome completo"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" 
                  title="Não é permitido caraceteres especiais"
                />

                <Input
                  name="birth_date"
                  label="Data de nascimento"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.birth_date}
                />

                <InputMask
                  name="cpf"
                  label="CPF"
                  type="text"
                  mask={"cpf"}
                  placeholder="Digite o seu CPF"
                  onChange={formik.handleChange}
                  value={formik.values.cpf}
                  pattern="^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$" 
                  title="Preencha seu CPF corretamente!"
                />

                <InputMask
                  name="number"
                  label="Celular"
                  type="text"
                  mask={"phone"}
                  placeholder="Digite o número de seu celular"
                  onChange={formik.handleChange}
                  value={formik.values.number}
                  pattern="^\((\d{2})\) 9[0-9]{4}-[0-9]{4}$" 
                  title="Preencha seu número corretamente!"
                />

                <Input
                  name="email"
                  label="E-mail"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" 
                  title="Preencha o seu e-mail corretamente!"
                />

                <Input
                  name="address"
                  label="Endereço"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />

                <Textarea
                  label="Observação"
                  name="note"
                  onChange={formik.handleChange}
                  value={formik.values.note}
                />


                <footer>
                  <button type="submit">Adicionar</button>
                </footer>
              </fieldset>
            </form>
          </main>
        </div>
      </main>
    </div>
  );
}

export default ClientForm;

