import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type ButtonProps = {
  name: string;
  redirectPath: string;
};
const ButtonRedirect = ({ name, redirectPath }: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(redirectPath);
      }}
    >
      <ArrowBackIcon /> {name}
    </Button>
  );
};

export default ButtonRedirect;
