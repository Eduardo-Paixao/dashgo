import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction, forwardRef } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...props },
  ref,
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="email">{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        type="email"
        focusBorderColor={"pink.500"}
        bgColor={"gray.900"}
        variant={"filled"}
        _hover={{
          bgColor: "gray.900",
        }}
        size={"lg"}
        ref={ref}
        {...props}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
