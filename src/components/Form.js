import React from "react";

var FormContext = null;
export function Form({ children, onSubmit, methods, ...rest }) {
  const { handleSubmit } = methods;
  FormContext = React.createContext({ methods });

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      {React.Children.map(children, (child) => {
        return child;
      })}
    </form>
  );
}

export function Input({ register, name, ...rest }) {
  return <input {...register(name)} {...rest} />;
}

export function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export function RowInput({ children, ...rest }) {
  const { methods } = React.useContext(FormContext);

  return (
    <div {...rest}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name
              }
            })
          : child;
      })}
    </div>
  );
}
