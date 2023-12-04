import React from "react";
import { AppRouter } from "./router/AppRouter";
import { Container } from "./components";

export const CounterApp = () => {
	return (
		<Container>
			<AppRouter />
		</Container>
	);
};
