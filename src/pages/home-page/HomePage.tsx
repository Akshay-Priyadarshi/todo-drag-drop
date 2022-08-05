import {
    Heading,
    ListItem,
    UnorderedList,
    VStack,
    Text,
    Container,
    Center,
    ListIcon,
    Link,
    Image,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

import { BiLinkExternal } from "react-icons/bi";
import { GoRocket } from "react-icons/go";

const HomePage = () => {
    return (
        <div>
            <Center>
                <Heading
                    display={"flex"}
                    alignItems={"center"}
                    width={"max-content"}
                    color={"primary.500"}
                    fontSize={"6xl"}
                    textAlign={"center"}
                    my={"10"}
                    p={"10"}
                    border={"2px solid"}
                    borderColor={"tertiary.500"}
                >
                    "The" react template for production
                    <Image mx={"5"} as={"span"} color={"tertiary.400"}>
                        <GoRocket />
                    </Image>
                </Heading>
            </Center>
            <VStack color={"primary.500"}>
                <Container>
                    <Heading my={"5"}>Pre-configured with </Heading>
                    <UnorderedList>
                        <ListItem>
                            <Link href="https://react-icons.github.io/react-icons">
                                <Text
                                    fontSize={"2xl"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text fontWeight={"bold"} as={"span"}>
                                        React Icons
                                    </Text>{" "}
                                    - For the best icons
                                    <ListIcon as={BiLinkExternal} />
                                </Text>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://v5.reactrouter.com/">
                                <Text
                                    fontSize={"2xl"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text fontWeight={"bold"} as={"span"}>
                                        React Router
                                    </Text>{" "}
                                    - For routing
                                    <ListIcon as={BiLinkExternal} />
                                </Text>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://axios-http.com/">
                                <Text
                                    fontSize={"2xl"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text fontWeight={"bold"} as={"span"}>
                                        Axios
                                    </Text>{" "}
                                    - For network calls
                                    <ListIcon as={BiLinkExternal} />
                                </Text>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://redux-toolkit.js.org/">
                                <Text
                                    fontSize={"2xl"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text fontWeight={"bold"} as={"span"}>
                                        Redux
                                    </Text>{" "}
                                    - For state management
                                    <ListIcon as={BiLinkExternal} />
                                </Text>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://formik.org/">
                                <Text
                                    fontSize={"2xl"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text fontWeight={"bold"} as={"span"}>
                                        Formik
                                    </Text>{" "}
                                    - For forms management
                                    <ListIcon as={BiLinkExternal} />
                                </Text>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://create-react-app.dev/docs/making-a-progressive-web-app/">
                                <Text
                                    fontSize={"2xl"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text fontWeight={"bold"} as={"span"}>
                                        PWA
                                    </Text>{" "}
                                    - Progressive web app
                                    <ListIcon as={BiLinkExternal} />
                                </Text>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://react-query.tanstack.com/">
                                <Text
                                    fontSize={"2xl"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text fontWeight={"bold"} as={"span"}>
                                        React Query
                                    </Text>{" "}
                                    - For better network calls
                                    <ListIcon as={BiLinkExternal} />
                                </Text>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.framer.com/motion/">
                                <Text
                                    fontSize={"2xl"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text fontWeight={"bold"} as={"span"}>
                                        Framer motion
                                    </Text>{" "}
                                    - For awesome animation
                                    <ListIcon as={BiLinkExternal} />
                                </Text>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://chakra-ui.com/">
                                <Text
                                    fontSize={"2xl"}
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text fontWeight={"bold"} as={"span"}>
                                        Chakra UI
                                    </Text>{" "}
                                    - For awesome components
                                    <ListIcon as={BiLinkExternal} />
                                </Text>
                            </Link>
                        </ListItem>
                    </UnorderedList>
                </Container>
                <Container centerContent>
                    <Link href="https://github.com/Akshay-Priyadarshi/node-react-client">
                        <AiFillGithub
                            style={{
                                height: "50px",
                                width: "50px",
                                margin: "10px",
                            }}
                        />
                    </Link>
                </Container>
                <Container minW={"100vw"} centerContent>
                    <Heading fontSize={"xl"} my={"10"}>
                        Made with ❤️ | By{" "}
                        <Link href="https://github.com/Akshay-Priyadarshi">
                            Akshay Priyadarshi
                        </Link>
                    </Heading>
                </Container>
            </VStack>
        </div>
    );
};

export default HomePage;
