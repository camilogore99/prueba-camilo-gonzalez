import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, User } from "../pages";
import { useEffect, useState } from "react";
import { useStore } from "../store/userStore";

export const AppRouter = () => {
	const { token } = useStore((state) => state);
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate("/user");
		} else {
			navigate("/");
		}
	}, [token]);

	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/user" element={<User />} />
		</Routes>
	);
};
