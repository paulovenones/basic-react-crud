import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import "./styles.css";
import InputMask from "../../components/InputMask";
import Textarea from "../../components/Textarea";
import MaskedInput from "react-text-mask";

const nameFormat = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
const numberFormat = /^\((\d{2})\) 9[0-9]{4}-[0-9]{4}$/;

const schema = Yup.object().shape({
  // name: Yup.string()
  //   .required("Informe o nome!")
  //   .matches(nameFormat, "Caracteres especiais não são aceitos"),
  // birth_date: Yup.date().required("Informe a data de nascimento!"),
  // // cpf: Yup.string().required("Informe o CPF!"),
  // // number: Yup.string().required("Informe o número!").matches(numberFormat),
  // email: Yup.string()
  //   .email("Informe um e-mail válido!")
  //   .required("Informe o email!"),
  // address: Yup.string().required("Informe o endereço!"),
  // note: Yup.string().max(300).notRequired(),
});

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({
    name: "",
    birth_date: "",
    cpf: "",
    number: "",
    email: "",
    address: "",
    note: "",
  }),
  handleSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: "ClientForm",
  validationSchema: schema,
});

const ClientForm = (props: Object) => {
  return (
    <div id="page-client-form" className="container">
      <PageHeader />
      <main>
        <div className="form-content">
          <main>
            <Form>
              <fieldset>
                <legend>Seus dados</legend>
                <Input label="Nome" name="name" placeholder="" type="text" />
                <Input
                  label="Data de nascimento"
                  name="birth_date"
                  type="date"
                />
                <InputMask label="CPF" name="cpf" type="text" mask="cpf" />
                <InputMask
                  label="Celular"
                  name="number"
                  type="text"
                  mask="phone"
                  pattern="^\((\d{2})\) 9[0-9]{4}-[0-9]{4}$"
                />

                <Input label="E-mail" name="email" type="text" />

                <Input label="Endereço" name="address" type="text" />

                <Textarea label="Observação" name="note" />
                <footer>
                  <button type="submit">Adicionar</button>
                </footer>
              </fieldset>
            </Form>
          </main>
        </div>
      </main>
    </div>
  );
};

export default enhanceWithFormik(ClientForm);

