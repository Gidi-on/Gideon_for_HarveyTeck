import styled from "@emotion/styled";
import { ClipLoader } from "react-spinners";

const StyledClipLoader = styled(ClipLoader)`
  display: block;
  margin: 0 auto;
`;

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <StyledClipLoader color="primary" size={150} />
    </div>
  );
};

export default Spinner;
