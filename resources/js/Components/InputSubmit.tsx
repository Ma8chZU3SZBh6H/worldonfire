import { TypeInputSubmit } from "../types/Types";

function InputSubmit({ value }: TypeInputSubmit) {
    return (
        <input
            name="submit"
            className="btn-submit"
            type="submit"
            value={value}
        />
    );
}

export default InputSubmit;
