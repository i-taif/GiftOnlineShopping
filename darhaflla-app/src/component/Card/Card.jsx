import React from 'react'
import CardTemp from './CardTemp'
import {SimpleGrid} from '@chakra-ui/react'
import eidbag from '../Assets/Images/eidbag.jpg'
import flower from '../Assets/Images/flower.jpg'
import rose from '../Assets/Images/rose.jpg'
import dount from '../Assets/Images/donut.jpg'
export default function Card() {
    const Fllower = [
        {
            img: eidbag ,
            title: " حقيبة عيد" , 
            price: 45 ,
            currency:'SAR',
        },
        {
            img: dount,
            title: "باقة من الدونات  " , 
            price: 70 ,
            currency:'SAR',
        },
        {
            img: rose ,
            title: "باقة ورد" , 
            price: 120 ,
            currency:'SAR',
        },
        {
            img: flower ,
            title: "باقة ورد" , 
            price: 200 ,
            currency:'SAR',
        },
        {
            img: eidbag ,
            title: " حقيبة عيد" , 
            price: 45 ,
            currency:'SAR',
        },
    ]
    const Flloweres = Fllower.map(i => <CardTemp flower={i} />)
  return (
    <SimpleGrid minChildWidth="250px" spacing="20px" p={5}>
        {Flloweres}
    </SimpleGrid>
  )
}
