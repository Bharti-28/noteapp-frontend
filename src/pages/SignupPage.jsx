import {Box, Flex, Image, VStack} from "@chakra-ui/react";
import signupimage from "../assets/signupimage.jpg";
import {
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getUser } from "../Redux/users/user.actions";
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from "../constants/config";
import axios from "axios";

export default function SignupPage(){
    const nav = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async()=>{
       let data = await axios.post(BASE_URL+"/user/register", {
        name, email, password
       })
       let  {message, status} = data.data
       if(status==1){
        alert(message)
        nav("/login")
       }else{
        alert(message)
       }
    }

    return <Flex padding={4} w="100%">

       <Image mt ={40} marginLeft={40} w={500} h={500}  src={signupimage} ></Image>
    
    <VStack w={"50%"}>

    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} fontFamily={"cursive"}>Sign up with note app</Heading>
          <Text fontSize={'lg'} color={'gray.600'} fontFamily={"cursive"}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel fontFamily={"cursive"}>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)}  type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel fontFamily={"cursive"}>Email address</FormLabel>
              <Input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel fontFamily={"cursive"}>Password</FormLabel>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button fontFamily={"cursive"}
              onClick={handleSignup}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    </VStack>
    </Flex>
}