import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

type ButtonProps = {
  onClick: Function;
  id?: string;
};

const EditButton = ({ onClick, id }: ButtonProps) => {
  return (
    <Button
      onClick={() => onClick(id)}
      color="primary"
      sx={{ backgroundColor: "#b59b2b" }}
    >
      <EditIcon htmlColor="white" />
    </Button>
  );
};

export default EditButton;
