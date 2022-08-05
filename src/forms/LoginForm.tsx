import { Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import InputField from "../components/InputField";

const LoginForm = () => {
    type LoginFormInput = {
        email: string;
        password: string;
    };

    const formik = useFormik<LoginFormInput>({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={formik.handleSubmit}>
                <InputField
                    name={"email"}
                    type={"email"}
                    icon={<MdEmail />}
                    label={"Email"}
                    onChange={formik.handleChange}
                />
                <InputField
                    name={"password"}
                    type={"password"}
                    icon={<RiLockPasswordFill />}
                    label={"Password"}
                    onChange={formik.handleChange}
                />
                <Button type="submit">Login</Button>
            </form>
        </>
    );
};

export default LoginForm;
