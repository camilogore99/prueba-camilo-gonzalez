import { ButtonCustom } from "../../components";
import { useUser } from "./useUser";

export const User = () => {
	const { handleLogout, handleCounter, user, counter } = useUser();

	return (
		<div className=" flex flex-col gap-5">
			<ButtonCustom
				colorBg={"danger"}
				text={"Salir"}
				func={handleLogout}
			/>

			<h2 className="text-5xl font-bold text-center">Hola, {user}!!!</h2>

			<div className="flex flex-col items-center gap-5">
				<h2 className="text-9xl font-bold">{counter}</h2>

				<div className="flex gap-5">
					<ButtonCustom
						colorBg={"warning"}
						text={"Decrementar"}
						func={() => handleCounter("decrement")}
					/>
					<ButtonCustom
						colorBg={"success"}
						text={"Incrementar"}
						func={() => handleCounter("increment")}
					/>
				</div>
			</div>
		</div>
	);
};
