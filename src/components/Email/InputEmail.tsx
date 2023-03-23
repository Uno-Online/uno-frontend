import './InputEmail.css'

type PropsEmailValidate = {
    labelText: string,
    email: string,
}


export function EmailInput(props: PropsEmailValidate) {
    return (
        <>
            <label htmlFor="email">
                {props.labelText}
            </label>
            <input type="email" value={props.email} />
        </>
    );
}
