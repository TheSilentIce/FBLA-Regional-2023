interface GroupedButtonsProps {
  options: string[];
}

function GroupedButtons(properties: GroupedButtonsProps) {
  return (
    <div className="btn-group">
      {properties.options.map((optionValue, index) => (
        <button type="button" className="btn btn-primary" key={index}>
          {optionValue}
        </button>
      ))}
    </div>
  );
}

export default GroupedButtons;
