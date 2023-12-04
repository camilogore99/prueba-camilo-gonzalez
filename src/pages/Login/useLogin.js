import React, { useState } from "react";
import { useStore } from "../../store/userStore";

const initialState = {
	username: "",
	password: "",
};

export const useLogin = () => {
	const { setToken, setUser } = useStore((state) => state);
	const [values, setValues] = useState(initialState);

	const handleClick = () => {
		if (!values.username) return alert("El nombre de usuario es necesario");
		setToken(true);
		setUser(values.username);
	};

	const handleValues = (key, value) => {
		setValues({
			...values,
			[key]: value,
		});
	};
	return { handleClick, handleValues, values };
};
