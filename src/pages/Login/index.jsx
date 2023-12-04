import { InputCustom, ButtonCustom } from "../../components";
import { useLogin } from "./useLogin";

export const Login = () => {
	const { handleClick, handleValues, values } = useLogin();

	return (
		<form className="bg-slate-800 p-5 flex flex-col gap-5 rounded-lg">
			<InputCustom
				label={"Username"}
				type={"text"}
				value={values.username}
				name={"username"}
				onchange={handleValues}
			/>
			<InputCustom
				label={"Password"}
				type={"password"}
				value={values.password}
				name={"password"}
				onchange={handleValues}
			/>
			<ButtonCustom text={"Ingresar"} func={handleClick} />
		</form>
	);
};
