import React from "react";
import { HStack, Heading, Image, Text, Spacer, Button, Box } from "@chakra-ui/react";
import HomeImage from "../Assets/Images/HomeImage.png";
export default function HomeSectionFour() {
  return (
    <div className="SectionFour">
      <HStack>
        <Box  mr={"10"}>
          <Heading   color={"white"}>
            الأشتراكات{" "}
          </Heading>
          <br />
          <Text className="sectionFourText" color={"white"} fontSize={"lg"}>
            {" "}
            حافظ على انتعاش وحيوية منزلك أو مكتبك من خلال الاشتراك
            <br/> للحصول على تنسيقة ورد جديدة كل أسبوع.{" "}
          </Text>
          <br/>
          <Button className="sectionFourButton" mr={'20'} color={"white"} bg={"#8863A2"} _hover={{bg:'#8863A2'}}>
            اشترك الأن
          </Button>
        </Box>
        <Spacer />
        <Image className="sectionFourImg" h={"full"} w={"300px"} src={HomeImage} />
      </HStack>
    </div>
  );
}
