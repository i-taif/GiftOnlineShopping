import React from 'react'
import { TbTruckDelivery, TbHeartHandshake } from 'react-icons/tb';
import { MdInsights } from 'react-icons/md';
import {
    HStack,
    Text,
    Center
  } from "@chakra-ui/react";
export default function HomeSectionTwo() {
  return (
    <div className='SectionTwo'>
        <Center mb='50px'>
        <HStack spacing='20px'h={"30vh"}>
    <TbTruckDelivery className='SectionTwoSVG' style={{width:"30px" ,height:"40px"}} />
    <Text className='SectionTwoText' fontSize={'xl'}>خدمة التوصيل الى  بابك   <br/> بنفس اليوم</Text>
    <MdInsights className='SectionTwoSVG' style={{width:"30px" ,height:"40px"}} />
    <Text className='SectionTwoText' fontSize={'xl'}> جودة عالية </Text>
    <TbHeartHandshake className='SectionTwoSVG' style={{width:"30px" ,height:"40px"}} />
    <Text className='SectionTwoText' fontSize={'xl'}> تنسيق حسب الطلب </Text>
  </HStack>
  </Center>
    </div>
  )
}
