import { TypeInputCheckbox } from "../types/Types";
import Input from "./Input";
import InputLabel from "./InputLabel";

function InputCheck({ name, label, className }: TypeInputCheckbox) {
    return (
        <div className="flex items-center gap-3">
            <input
                id={name}
                name={name}
                className={`input ${className}`}
                type={"checkbox"}
            />
            <InputLabel label={label} name={name} />
        </div>
    );
}

export default InputCheck;
