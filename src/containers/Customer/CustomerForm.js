import { Form, Input, Select, RowInput } from "../../components/SimpleForm";
import React from "react";

let RenderCounter = 0;
export default function CustomerForm() {
  const defaultValues = { firstName: "Enter Me" };
  let onSubmit = (data) => console.log(data);
  let onReset = (event) => {
    console.log("On reset");
  };

  RenderCounter++;

  return (
    <>
      <h3>{RenderCounter}</h3>
      <Form onReset={onReset} onSubmit={onSubmit} defaultValues={defaultValues}>
        <RowInput>
          <Input
            name="firstName"
            label="First Name"
            placeholder="Enter First Name"
            size={3}
          />
          <Input
            name="lastName"
            label="Last Name"
            placeholder="Enter Last Name"
            size={6}
          />
          <Input
            name="extension"
            label="Extension"
            placeholder="Enter Extension"
            size={6}
          />
          <Select label="Gender" name="gender" options={["Female", "Male"]} />
        </RowInput>

        <button type="submit">Submit</button>
        <button type="reset">Clear</button>
      </Form>
    </>
  );
}
