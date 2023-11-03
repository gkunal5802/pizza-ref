import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ to, children }) {
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        &larr; Go Back
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
