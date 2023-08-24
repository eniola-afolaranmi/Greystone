"use client";
// import styles from "../../styles/login.css";
import { useForm } from "@mantine/form";
import { TextInput, Button, Box } from "@mantine/core";

export default function SenseiLogin() {
  const form = useForm({
    initialValues: { name: "", email: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (/123/.test(value) ? null : "Invalid password"),
    },
  });
  return (
    <Box
      maw={320}
      mx="auto"
    >
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <TextInput
          mt="sm"
          label="Password"
          placeholder="Password"
          {...form.getInputProps("password")}
        />
        <Button
          type="submit"
          mt="sm"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
