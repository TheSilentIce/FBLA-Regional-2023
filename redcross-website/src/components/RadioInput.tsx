interface RadioInputProps {
	name: string;
	id: string;
	options: string[];
}

function RadioInput(properties: RadioInputProps) {
	return (
		<div className="pt-2">
			{properties.name}
			{properties.options.map((optionValue, index) => (
				<div className="form-check" key={index}>
					<input
						className="form-check-input"
						type="radio"
						name="id"
						id={properties.id + index}
					/>
					<label
						className="form-check-label"
						htmlFor={properties.id + index}
					>
						{optionValue}
					</label>
				</div>
			))}
		</div>
	);
}

export default RadioInput;
