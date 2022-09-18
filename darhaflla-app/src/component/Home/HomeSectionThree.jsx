import React from 'react'
import {
  Grid,
  GridItem,
  Flex,
  Text,
  Container,
  
} from "@chakra-ui/react";
import HomeImage from '../Assets/Images/HomeImage5.png'

export default function HomeSectionThree() {
  return (
    <div className='SectionThree'>

<Flex justifyContent="space-between" m='30px'>
          <Text
            fontSize={"2xl"}
            fontWeight={700}
            position={"relative"}
          >
            اكتشف الفئات 
          </Text>
          <Text
            fontSize={"lg"}
            fontWeight={700}
            color={"#FFCF4D"}
            _hover={{ bg: "#FFCF4D", color: "white" }}
          >
            اظهر المزيد
          </Text>
        </Flex>
        <Container maxW={"6xl"}>
        <Grid  mb='200px'
  h='200px'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(13, 1fr)'
  gap={4}
>
  <GridItem rowSpan={20} colSpan={2} bg='#8863A2' > <Text className='SectionThree' > ورد</Text> </GridItem>
  <GridItem colSpan={3} rowSpan={10} bg='pink' > <Text className='SectionThree' > ورد و شكلاتة</Text> </GridItem>
  <GridItem colSpan={2} rowSpan={10} bg='#C8E8D2'> <Text className='SectionThree' > ورد و كيك</Text> </GridItem>
  <GridItem colSpan={2} rowSpan={10} bg='#FFCF4D'> <Text className='SectionThree' > ورد و مجوهرات</Text> </GridItem>
  <GridItem colSpan={2} rowSpan={10} bg='#C2E8E8'><Text className='SectionThree' > ورد و عطور</Text></GridItem>
  <GridItem colSpan={2} rowSpan={10} bg='#E3C2FF'><Text className='SectionThree' > ورد و فازات </Text></GridItem>
  <GridItem colSpan={2} rowSpan={10} bg='#FFCF4D'><Text className='SectionThree' > العيد  </Text></GridItem>
  <GridItem colSpan={2} rowSpan={10} bg='#C2E8E8'><Text className='SectionThree' > مسكات  </Text></GridItem>
  <GridItem colSpan={2} rowSpan={10} bg='#E3C2FF'><Text className='SectionThree' > شبكة </Text></GridItem>
  <GridItem colSpan={5}  rowSpan={10}bg='#C8E8D2' ><Text className='SectionThree' >ورد</Text></GridItem>
</Grid>
</Container>
    </div>
  )
}
