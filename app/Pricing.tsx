import { Box, Flex, Heading, Text, Button, HStack, Icon } from '@chakra-ui/react';
import React from 'react'
import CheckMark from './CheckMark';

export default function pricing() {
    return <Box
        maxW="950px"
        m='auto'
        // ml={{base:"20px", lg:"auto"}}
        // mr={{base:"20px",lg:"auto"}}
        marginTop={'-150'}
        bg='white'
         mx={{base: "20px", lg: "auto"}}
        borderRadius={'18px'}
        overflow='hidden'
        boxShadow={'0px 25px 25px -5px rgba(0,0,0,0.2), 0px 15px 15px -5px rgba(0,0,0,0.1)'
        }
        >
        <Flex direction={{md:'colum', base: 'colum', lg:'row'}}>
            <Box bg=" #ccbcee" p="40px" textAlign={'center'}>
                
                <Text fontSize={'24px'} fontWeight={'bold'}>Premium PRO
                </Text>
                <Heading fontSize={'60px'}>$399</Heading>
                <Text fontWeight={'semibold'}>billed just once</Text>
                <Button bg="#906ed5" color= "white" width={'290px'} mt='10px'>Get Started</Button>
            </Box> 
            <Box pt= '50px' pl='25px' pr='10px'>
                <Text padding={'10px'} fontWeight='semibold'>Access these features when you get this pricing package for your business</Text>
                <Text>
                    <HStack mb={'5px'}>
                        <Icon as={CheckMark} />
                        <Text fontWeight='semibold'>International calling and messaging API</Text>
                    </HStack>
                    <HStack mb={'5px'}>
                    <Icon as={CheckMark}/>
                        <Text fontWeight='semibold'>Additional phone numbers</Text>
                    </HStack>
                    <HStack mb={'5px'}>
                    <Icon as={CheckMark}/>
                        <Text fontWeight='semibold'>Auttomated messages via Zapier</Text>
                    </HStack>
                    <HStack mb={'5px'}>
                    <Icon as={CheckMark}/>
                        <Text fontWeight='semibold'>24/7 support consulting</Text>
                    </HStack>
                </Text>
            </Box>
        </Flex>

    </Box>;

}
