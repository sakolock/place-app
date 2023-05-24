import { useActionData } from "react-router-dom";
import { Input, INPUTS } from "./Input";
import Text from "../Typography/Text";
import Button from "../Common/Button";
// {"user": {"email": "abc@123.com", "password": "super-secret", "display_name": "Superman"}}
// Response
// {"id": 1, "display_name": "Superman"}
export default function Login() {
  const errors = useActionData();

  return (
    <>
      <Text type="h1">Login</Text>
      <form action="/users/sign_in" method="/post">
        <Input label="Username" type={INPUTS.email} name="email" isRequired />
        {errors?.email && <span>{errors.email}</span>}
         <Input label="Password" type={INPUTS.password} name="password" isRequired />
        {errors?.password && <span>{errors.password}</span>}
        <Button type="submit">Login</Button>
      </form>
    </>
  )
}
