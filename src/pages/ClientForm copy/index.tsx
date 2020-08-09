import React, { useState } from "react";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import InputMask from "../../components/InputMask";

import "./styles.css";

function ClientForm() {
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
      alert(JSON.stringify(values, null, 2));
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
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
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
                  placeholder="Digite seu CPF"
                  onChange={formik.handleChange}
                  value={formik.values.cpf}
                />

                <InputMask
                  name="number"
                  label="Celular"
                  type="text"
                  mask={"phone"}
                  placeholder="Enter a phone number"
                  onChange={formik.handleChange}
                  value={formik.values.number}
                />

                <Input
                  name="email"
                  label="E-mail"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
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

  // return (
  //   <div id="page-teacher-form" className="container">
  //      <PageHeader/>

  //      <h1>Seus dados</h1>
  //      <Formik
  //       initialValues={initialFormValues}
  //       validationSchema={schema}
  //       onSubmit={}
  //      ></Formik>
  //   </div>

  // );
}

export default ClientForm;
