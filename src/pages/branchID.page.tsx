import { Link, useParams } from "react-router-dom";

type Params = {
  id?: string; // The 'id' parameter is optional because it may not be provided
};

const BranchID = () => {
  const { id } = useParams<Params>(); // Get date from URL parameters

  const today = new Date();
  const currentDate = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  return (
    <>
      <p>{id}</p>
      <Link to={`/app/branch/${id}/schedule/${currentDate}`}>Car Schedule</Link>
    </>
  );
};

export default BranchID;
