import React, { FC } from "react";
import { useRouter } from "next/router";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Divider, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { EventProps } from "@/models/contentModels";
import Details from "./components/Details";

type Props = {
    data: EventProps;
};

const Event: FC<Props> = (props) => {
    const router = useRouter();

    return (
        <Stack mb={20}>
            <HStack onClick={router.back} mt={-4} cursor={"pointer"}>
                <IconButton icon={<ArrowBackIcon />} size="sm" aria-label="back" />
                <Text cursor={"pointer"}>Back</Text>
            </HStack>
            <Divider />
            <Details {...props.data} />
        </Stack>
    );
};

export default Event;
