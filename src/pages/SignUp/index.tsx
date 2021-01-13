import React from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from '../../containers/AuthContainer'

import logoImg from "../../assets/logo.png";
import { FiArrowLeft } from "react-icons/fi";
import { Container, Content, AnimationContainer, Background } from "./styles";


const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="2seed" />
          
          <SignUpForm />

          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;



{/* <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input name="cpf" icon={FiUser} placeholder="CPF" />
            <Input name="city" icon={FiHome} placeholder="Cidade" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button loading={loading} type="submit">
              Cadastrar
            </Button>
          </Form> */}


  // const handleSubmit = useCallback(
  // async (data: SignUpFormData) => {
  //   try {
  //     formRef.current?.setErrors({});
  //     setLoading(true);

  //     const schema = Yup.object().shape({
  //       name: Yup.string().required("Nome obrigatório"),
  //       email: Yup.string()
  //         .required("Email obrigatório")
  //         .email("Digite um e-mail válido"),
  //       cpf: Yup.number().required().min(11, "Mínimo 11 digitos"),
  //       city: Yup.string().required("Cidade obrigatório"),
  //       password: Yup.string().min(4, "No mínimo 4 dígitos"),
  //     });

  //     await schema.validate(data, {
  //       abortEarly: false,
  //     });
  //     // the token and id should be return from backend
  //     await api.post("/users", {
  //       id: uuid(),
  //       name: data.name,
  //       cpf: data.cpf,
  //       email: data.email,
  //       password: data.password,
  //       address: {
  //         city: data.city,
  //         zip: '',
  //         street:'',
  //         number: '',
  //         district: '',
  //       },
  //       token: uuid(),
  //     });

  //     history.push("/");

  //     addToast({
  //       type: "success",
  //       title: "Cadastro realizado!",
  //       description: "Você já pode fazer seu login no 2SEED!",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     if (err instanceof Yup.ValidationError) {
  //       const errors = getValidationErrors(err);

  //       formRef.current?.setErrors(errors);

  //       return;
  //     }
  //     addToast({
  //       type: "error",
  //       title: "Erro no cadastro",
  //       description: "Ocorreu um erro ao fazer o cadastro, tente novamente.",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // },
  // [addToast, history]
  // );