import bag from "../Assets/Images/eidbag.jpg";
import { BsTrash ,BsPlus} from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import {
  Box,
  Textarea,
  Container,
  Stack,
  Text,
  Input,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Image,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";

export default function Simple() {
  return (
    <Container maxW={"6xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Box borderRadius="sm" w={"80%"}>
            <Heading>الرسالة</Heading>
            <Box borderWidth="1px" mt={5}>
              <Box m={"8"}>
                <Input variant="unstyled" placeholder="الى" size="lg" />
                <hr />
                <Textarea variant="unstyled" placeholder="الرسالة" />
                <Input variant="unstyled" placeholder="من" size="lg" />
                <hr />
              </Box>
            </Box>
            <Text color={'#875AA1'} style={{direction:"ltr"}}>معاينة الرسالة</Text>
          </Box>
        </Flex>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box borderWidth="1px" w={"100%"}>
              <Box>
                <Flex m={5}>
                  <Image src={bag} w="100px" />
                  <Spacer />
                  <BsTrash />
                </Flex>
              </Box>
              <Box borderWidth="1px" w={100} >
                <Flex>
                <BiMinus/>
                <Text> 1</Text>
                <Spacer/>
                <BsPlus/>
                </Flex>
              </Box>
            </Box>


            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color="#FFCF4D"
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                 الفاتورة
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                <ListItem> المجموع</ListItem>
                  <ListItem>رسوم التوصيل</ListItem>
                  <ListItem> الضربية 15%</ListItem>{" "}
                  <ListItem>الإجمالي</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>70 SAR </ListItem>
                  <ListItem>25 SAR </ListItem>
                  <ListItem> 10.5 SAR </ListItem>
                  <ListItem> 95 SAR</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg="#875AA1"
            color="white"
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            اضافة عنوان المستلم
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
