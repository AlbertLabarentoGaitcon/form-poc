import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

var FormContext = null;
export function Form({ onReset, defaultValues, children, onSubmit, ...rest }) {
  const methods = useForm({
    defaultValues,
  });
  const { handleSubmit, reset } = methods;
  FormContext = React.createContext({ methods });
  const decoratedOnReset = (event) => {
    event.preventDefault();
    console.log(methods.getValues());
    onReset(Event);
  };

  return (
    <form
      onReset={decoratedOnReset}
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      {children}
    </form>
  );
}

export function Input({ register, className, ...rest }) {
  return (
    <input
      {...register(name)}
      {...rest}
      onChange={() => {
        // console.log(methods.getValues());
      }}
    />
  );
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
                key: child.props.name,
              },
            })
          : child;
      })}
    </div>
  );
}
