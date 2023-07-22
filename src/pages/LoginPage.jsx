import {Box, Flex, Image, VStack} from "@chakra-ui/react";
import loginimage from "../assets/loginimage.png";
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

export default function LoginPage(){
    const nav = useNavigate()
    const {auth, token, loading, error} = useSelector((state)=>state.userReducer)
    console.log(auth, token)
    if(auth){
        nav("/notes")
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const handleLogin =() =>{
        dispatch(getUser({email, password}))
    }
    if(loading) return <h1 style={{marginTop:"80px"}}>Loading...</h1>
    if(error) return <h1 style={{marginTop:"80px"}}>error</h1>

    return <Flex padding={4} w="100%">

       <Image mt ={40} marginLeft={40} w={500} h={500} src={loginimage} ></Image>
    
    <VStack w={"50%"}>

    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} fontFamily={"cursive"}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'} fontFamily={"cursive"}>
            to enjoy all of our cool <Link color={'blue.400'} fontFamily={"cursive"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
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
                <Checkbox fontFamily={"cursive"}>Remember me</Checkbox>
                <Link color={'blue.400'} fontFamily={"cursive"}>Forgot password?</Link>
              </Stack>
              <Button fontFamily={"cursive"}
              onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    </VStack>
    </Flex>
}