import { Form, Input, Select, RowInput } from "../../components/FormLabeled";
import { useForm } from "react-hook-form";

export default function CustomerForm() {
  const methods = useForm({
    defaultValues: { firstName: "Enter Me" }
  });
  let onSubmit = (data) => console.log(data);
  let onReset = (event) => {
    event.preventDefault();

    methods.reset({
      firstName: ""
    });
  };

  return (
    <Form onSubmit={onSubmit} methods={methods}>
      <RowInput>
        <Input
          name="firstName"
          label="First Name"
          placeholder="Enter First Name"
        />
        <Input
          name="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
        />
        <Select
          label="Gender"
          name="gender"
          options={["female", "male", "other"]}
        />
      </RowInput>

      <button type="submit">Submit</button>
      <button onClick={onReset}>Clear</button>
    </Form>
  );
}