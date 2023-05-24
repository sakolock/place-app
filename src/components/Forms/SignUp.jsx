import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from "react-router-dom";
import { Input, INPUTS } from "./Input";
import Text from "../Typography/Text";
import Button from "../Common/Button";
import { register } from "../../api/auth";
// {"user": {"email": "abc@123.com", "password": "super-secret", "display_name": "Superman"}}
// Response
// {"id": 1, "display_name": "Superman"}

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = async (data) => {
    let { email, password, display_name } = data
    console.log(email, password, display_name)
    console.log('data', data)
    // const data = await register({email, password, display_name}, () => {
    //   navigate(from, { replace: true });
    // });
  }

  return (
    <>
      <Text type="h1">Register</Text>
      <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
        <Input label="Email" type={INPUTS.email} {...register('email', { required: true })} />
        {errors.email && <p>Email is required.</p>}
        <Input label="Username" type={INPUTS.text} {...register('display_name', { required: true })} />
        {errors.display_name && <p>Username is required.</p>}
        <Input label="Password" type={INPUTS.password} {...register('password', { required: true })} />
        {errors.password && <p>Password is required.</p>}
        <Button type="submit">Register</Button>
      </form>
    </>
  )
}
