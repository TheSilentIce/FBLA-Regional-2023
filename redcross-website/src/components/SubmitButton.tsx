import { FC, MouseEvent } from "react";

interface SubmitButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SubmitButton: FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <button type="submit" className="btn btn-danger w-100" onClick={onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
