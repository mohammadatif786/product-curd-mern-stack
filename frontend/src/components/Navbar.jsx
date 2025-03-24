import { Button, Container, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { CiSquarePlus } from 'react-icons/ci'
import { FaStoreSlash } from 'react-icons/fa'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={"4"} bg={useColorModeValue("gray.100", "gray.900")} >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: "column", sm: "row" }} >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={("/")}>Product Store </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"} >
          <Link to={"/create"}>
            <Button bg={useColorModeValue("blue.100", "blue.700")}>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar