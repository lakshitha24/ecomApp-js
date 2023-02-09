import { Button } from "@mui/material";

type ActionButtonProps = {
  formData: boolean;
  id?: string;
};

const ActionButton = ({formData,id}:ActionButtonProps) => {
  return <div>
    <Button variant="outlined" type="submit" disabled={formData}>
        {id ? 'Update':'Create'}
    </Button>
  </div>;
};

export default ActionButton
