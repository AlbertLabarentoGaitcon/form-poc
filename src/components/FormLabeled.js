import * as Decorated from "./Form";

export function Form(props) {
  return <Decorated.Form {...props} className="form-control" />;
}

export function Input({ label, ...rest }) {
  return (
    <div className="mb-3 col-md-6">
      <label className="form-label">{label}</label>
      <Decorated.Input {...rest} className="form-control" />
    </div>
  );
}

export function Select({ label, ...props }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <Decorated.Select {...props} className="form-select" />
    </div>
  );
}

export function RowInput(props) {
  return <Decorated.RowInput {...props} className="row" />;
}
