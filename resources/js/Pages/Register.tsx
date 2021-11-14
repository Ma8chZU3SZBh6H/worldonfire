import { Inertia } from "@inertiajs/inertia";
import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import InputSubmit from "../Components/InputSubmit";
import Input from "../Components/Input";
import Main from "../Layouts/Main";
import { TypeFormRegister } from "../types/Types";
import useInputs from "../Hooks/useInputs";
//@ts-ignore
import { ReactComponent, Head } from "@inertiajs/inertia-react";

function Register() {
    const formHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const { email, name, password, password_confirmation } =
            useInputs<TypeFormRegister>(e);
        Inertia.post("/register", {
            email: email.value,
            name: name.value,
            password: password.value,
            password_confirmation: password_confirmation.value,
        });
    };
    return (
        <Main>
            <Head title="Register" />
            <div className="flex justify-center pt-8">
                <form onSubmit={formHandler} className="form">
                    <h1 className="form-title">Register</h1>
                    <Input name="name" label="Full name" hint="Floof Waffle" />
                    <Input
                        name="email"
                        label="Your email"
                        hint="Floof@email.com"
                    />
                    <Input
                        name="password"
                        label="Your password"
                        type="password"
                    />
                    <Input
                        name="password_confirmation"
                        label="Confirm password"
                        type="password"
                    />
                    <InputSubmit value="Register" />
                    <Link className="link" href="/login">
                        Login Instead
                    </Link>
                </form>
            </div>
        </Main>
    );
}

export default Register;
