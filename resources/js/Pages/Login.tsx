import { Link, useForm } from "@inertiajs/inertia-react";
import InputSubmit from "../Components/InputSubmit";
import InputCheck from "../Components/InputCheck";
import Input from "../Components/Input";
import Main from "../Layouts/Main";
import React from "react";
import { TypeFormLogin } from "../types/Types";
import { Inertia } from "@inertiajs/inertia";
import useInputs from "../Hooks/useInputs";

function Login() {
    const formHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const { email, password, remember } = useInputs<TypeFormLogin>(e);
        Inertia.post("/login", {
            email: email.value,
            password: password.value,
            remember: remember.checked,
        });
    };
    return (
        <Main>
            <div className="flex justify-center pt-8">
                <form onSubmit={formHandler} className="form">
                    <h1 className="form-title">Login</h1>
                    <Input
                        name="email"
                        label="Your email"
                        hint="example@gmail.com"
                    />
                    <Input
                        name="password"
                        label="Your password"
                        type="password"
                    />
                    <InputCheck name="remember" label="Remember me" />
                    <InputSubmit value="Login" />
                    <Link className="link" href="/register">
                        Create Account
                    </Link>
                </form>
            </div>
        </Main>
    );
}

export default Login;
