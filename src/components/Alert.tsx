import { ReactNode } from "react";

interface Props {
  children: string;
}

const Alert = ({ children }: Props) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
