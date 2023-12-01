interface ShortInputProps {
	name: string;
	id: string;
	autocomplete: string;
}

function ShortInput(properties: ShortInputProps) {
	return (
		<>
			<div className="form-floating">
				<input
					type="text"
					className="form-control"
					id={properties.id}
					placeholder={properties.name}
					autoComplete={properties.autocomplete}
				></input>
				<label
					htmlFor={properties.id}
					className="text-center form-label"
				>
					{properties.name}
				</label>
			</div>
		</>
	);
}

export default ShortInput;
