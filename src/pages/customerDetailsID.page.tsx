import { useParams } from "react-router-dom";

type Params = {
  id?: string; // The 'id' parameter is optional because it may not be provided
};

const CustomerDetailsID = () => {
  const { id } = useParams<Params>(); // Get date from URL parameters

  return (
    <>
      <p>{id}</p>
    </>
  );
};

export default CustomerDetailsID;
