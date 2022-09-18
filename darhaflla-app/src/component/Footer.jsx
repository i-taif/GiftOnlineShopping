import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  VisuallyHidden,
  Avatar,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import IthaqLogo from "./Assets/Images/DarHaflaLogo.png";
const Logo = (props: any) => {
  return <Avatar size={"lg"} src={IthaqLogo} bg={""} />;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={"white"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box bg="#F8F9FA">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"} color="#8863A2" _hover={{ color: "#8863A2" }}>
            من نحن
          </Link>
          <p className="line" style={{ color: "#FFCF4D" }}>
            |
          </p>
          <Link href={"#"} color="#8863A2" _hover={{ color: "#8863A2" }}>
            الشروط والأحكام
          </Link>
          <p className="line" style={{ color: "#FFCF4D" }}>
            |
          </p>
          <Link
            href={"/CountactUs"}
            color="#8863A2"
            _hover={{ color: "#8863A2" }}
          >
            اتصل بنا
          </Link>
        </Stack>
      </Container>

      <Box color={"#8863A2"} >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text color={"#8863A2"}>Copyright © 2022 Dar Alhaflah </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
      <Text color={'#8863A2'} mr='84%' mt='-2'> صنع بواسطة طيف</Text>
    </Box>
  );
}
