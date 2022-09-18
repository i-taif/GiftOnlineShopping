import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Flex,
  color
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
export default function ProductSimple(props) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${props.flower.img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={props.flower.img}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {props.flower.title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={400} fontSize={"s"}>
              {props.flower.currency}
            </Text>
            <Text fontWeight={800} fontSize={"xl"}>
              {props.flower.price}
            </Text>
          </Stack>
          <Flex gap={2}>
          <MdAddShoppingCart style={{ width: "25px", height: "30px" }} />
          <Button
            as={NavLink}
            to="/CardDetails"
            bg="#875AA1"
            color={"white"}
            _hover={{ bg: "#875AA1",  color:'white'}}
          >
            اضف الى السلة
          </Button>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
}
