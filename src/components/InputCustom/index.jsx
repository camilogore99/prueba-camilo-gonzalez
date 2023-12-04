import React from "react";

export const InputCustom = ({ label, type, onchange, value, name }) => {
	return (
		<div className="flex flex-col">
			<label>{label}</label>
			<input
				className="p-2 outline-none rounded-lg text-black"
				type={type}
				name={name}
				onChange={(e) => onchange(name, e.target.value)}
				value={value}
			/>
		</div>
	);
};
