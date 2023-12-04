import React from "react";

export const Container = ({ children }) => {
	return (
		<section className="bg-slate-900 text-white min-h-screen">
			<section className="max-w-3xl m-auto p-5">{children}</section>
		</section>
	);
};
