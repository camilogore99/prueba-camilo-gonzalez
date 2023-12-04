import React from "react";

export const ButtonCustom = ({ text, func, colorBg = "base" }) => {
	const stylesButton = {
		base: "bg-blue-500",
		danger: "bg-red-500",
		success: "bg-green-500",
		warning: "bg-yellow-500",
	};

	return (
		<button
			className={`px-5 py-3 ${stylesButton[colorBg]} rounded-lg uppercase font-bold`}
			onClick={func}
		>
			{" "}
			{text}
		</button>
	);
};
