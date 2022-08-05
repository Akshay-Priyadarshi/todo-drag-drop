import { Button, Heading, HStack, Spacer, VStack } from "@chakra-ui/react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { decrement, increment, reset } from "../store/slices/counter.slice";

const Counter = () => {
    const count = useAppSelector((state) => state.counter.count);

    const dispatch = useAppDispatch();

    return (
        <VStack
            bgColor={"gray.400"}
            width={"fit-content"}
            borderRadius={"lg"}
            p={"4"}
        >
            <Heading>{count}</Heading>
            <Spacer />
            <HStack>
                <Button variant={"solid"} onClick={() => dispatch(increment())}>
                    Increment
                </Button>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            </HStack>
            <Spacer />
            <Button onClick={() => dispatch(reset())}>Reset</Button>
        </VStack>
    );
};

export default Counter;
