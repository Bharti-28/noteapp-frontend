import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon} from '@chakra-ui/icons';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../Redux/users/user.type';



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const {auth, token, loading, error} = useSelector((state)=>state.userReducer)

  const nav = useNavigate()
  return (
    <>
      <Box zIndex={1000} position={"fixed"} top={0} w={ "100%"} boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 12px;"} bg={"skyblue"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} fontFamily={"cursive"} color={"blackAlpha.800"} fontSize={30}  cursor={'pointer'}
          onClick={() => {
            nav("/")
          }}>Note App</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
                <Button display={auth?"none":"block"} onClick={() => {
                    nav("/login")
                }} fontFamily={"cursive"}>Login</Button>
                <Button display={auth?"none":"block"} onClick={() => {
                    nav("/register")
                }} fontFamily={"cursive"}>Signup</Button>
                <Button display={auth?"block":"none"} onClick={() => {
                    nav("/notes")
                }} fontFamily={"cursive"} >All Notes</Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kEMUrjjp-dl3Y1q5b-lNC_m10w_ta96cJA&usqp=CAU'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kEMUrjjp-dl3Y1q5b-lNC_m10w_ta96cJA&usqp=CAU'}
                    />
                  </Center>
                  <br />
                  <Center fontFamily={"cursive"}>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem fontFamily={"cursive"}>Your Servers</MenuItem>
                  <MenuItem fontFamily={"cursive"}>Account Settings</MenuItem>
                  <MenuItem fontFamily={"cursive"} onClick={()=> dispatch({type:LOGOUT})}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}