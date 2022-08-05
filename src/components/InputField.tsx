import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    useBoolean,
} from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface Props
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    type: string;
    name: string;
    label: string;
    icon?: ReactElement;
}

const InputField: React.FC<Props> = ({ icon, name, type, label, ...rest }) => {
    const [showPassword, setShowPassword] = useBoolean(false);

    return (
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <InputGroup>
                <InputLeftElement children={icon} />
                <Input
                    id={name}
                    name={name}
                    {...rest}
                    type={
                        type !== "password"
                            ? type
                            : showPassword
                            ? "text"
                            : type
                    }
                />
                <InputRightElement>
                    {type === "password" ? (
                        <>
                            {!showPassword ? (
                                <AiFillEye
                                    onClick={() => setShowPassword.toggle()}
                                />
                            ) : (
                                <AiFillEyeInvisible
                                    onClick={() => setShowPassword.toggle()}
                                />
                            )}
                        </>
                    ) : null}
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
};

export default InputField;
