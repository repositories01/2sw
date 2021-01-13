import React, { useRef, useState } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiMail, FiUser, FiLock, FiHome } from "react-icons/fi";
import { SignUpFormData } from '../../interfaces/auth.interface'


export const SignUpForm = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = (data: SignUpFormData) => {
        console.log(data)
    }
    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
    )

}


