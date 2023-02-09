import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type ButtonProps = {
  onClick: Function;
  id?: string;
};

const DeleteButton = ({ onClick, id }: ButtonProps) => {
  return (
    <Button
      onClick={() => onClick(id)}
      color="warning"
      sx={{ backgroundColor: "#a71206", marginRight: 2 }}
    >
      <DeleteForeverIcon htmlColor="white" />
    </Button>
  );
};

export default DeleteButton;
