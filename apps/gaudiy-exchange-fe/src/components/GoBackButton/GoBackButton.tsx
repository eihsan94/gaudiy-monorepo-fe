import { Button } from "@repo/libs/ui";
import { useNavigate } from "react-router-dom";

export function GoBackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Button variant={"outline"} onClick={goBack}>
      Go Back
    </Button>
  );
}
