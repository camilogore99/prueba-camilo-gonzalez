import { useStore } from "../../store/userStore";

export const useUser = () => {
	const { setToken, counter, setCounter, user, setUser } = useStore(
		(state) => state
	);

	const handleLogout = () => {
		setToken(false);
		setCounter(0);
		setUser(null);
	};

	const handleCounter = (type) => {
		if (type === "decrement") {
			setCounter(counter - 1);
		} else {
			setCounter(counter + 1);
		}
	};
	return {
		handleLogout,
		handleCounter,
		user,
		counter,
	};
};
