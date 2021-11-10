import { usePage } from "@inertiajs/inertia-react";
import { TypeInput } from "../types";
import InputLabel from "./InputLabel";

function Input({ type, className, label, name, hint }: TypeInput) {
    return (
        <div className="from-group">
            <div className="flex flex-col py-1 px-2">
                <InputLabel name={name} label={label} />
            </div>
            <input
                id={name}
                name={name}
                placeholder={hint}
                className={`input ${className}`}
                type={type ?? "text"}
            />
        </div>
    );
}

export default Input;
