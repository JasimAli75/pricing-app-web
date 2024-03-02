import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import Icon1 from "./Icon1";
import Icon2 from "./Icon2";
import Icon3 from "./Icon3";

export default function Features() {
  return (
    <Box maxW="850px" m="auto" mt="40px">
      <Flex direction={{ base: "colum", lg: "row" }}>
        <HStack>
          <Icon as={Icon1} />
          <Text>30 days money back Gurantee</Text>
        </HStack>
        <HStack>
          <Icon as={Icon2} />
          <Text>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack>
          <Icon as={Icon3} />
          <Text>No monthly subscription pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
