import { REGISTER_TEXT } from "./constants/register.text.constants";
import { RegisterCounter } from "../counter/registerCounter/registerCounter";

export function RegisterLayout() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>{REGISTER_TEXT.TITLE}</h2>
            <form>
                <label htmlFor="name">{REGISTER_TEXT.NAME_LABEL}</label>
                <input type="text" id="name" name="name" required />
                <br/>
                <label htmlFor="age">{REGISTER_TEXT.AGE_LABEL}</label>
                <input type="text" id="age" name="age" required />
                <br/>
                <button type="submit" >{REGISTER_TEXT.BUTTON_LABEL}</button>
            </form>
            <RegisterCounter count={count} setCount={setCount}/>
        </>
    );
}