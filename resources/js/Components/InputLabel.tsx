import { usePage } from "@inertiajs/inertia-react";
import { TypeInputLabel } from "../types/Types";

function InputLabel({ label, name }: TypeInputLabel) {
    const { errors } = usePage().props;

    return (
        <>
            {label ? (
                <label className="label" htmlFor={name}>
                    {label}
                </label>
            ) : (
                ""
            )}
            {errors[name ?? "empty"] ? (
                <label className="label-error" htmlFor={name}>
                    {errors[name ?? "empty"]}
                </label>
            ) : (
                ""
            )}
        </>
    );
}

export default InputLabel;
