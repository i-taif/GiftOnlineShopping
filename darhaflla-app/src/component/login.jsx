import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  import { useState } from 'react';
  
  
  export default function SimpleCard() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin , setIsLogin] = useState(false)
  
    const handelUsername = (e) => {
      setUserName(e.target.value);
    };
    const handelePassword = (e) => {
      setPassword(e.target.value);
    };
    const handelSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted from ------>");
      axios
        .post("http://127.0.0.1:8000/user/login", {
          username: userName,
          password: password,
        })
        .then((respons) => {
          console.log(respons.data.msg);
          if (
            respons.data.msg == "Your token is ready"
          ) {
            localStorage.setItem("token",respons.data.token)
            redirect();
          }
          else{
            alert(respons.data.msg)
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("err");
          
          alert(err.respons.data.error.message);
        });
        localStorage.setItem("username", userName)
        localStorage.setItem("password", password)
        localStorage.setItem("isLogin",isLogin)
        setIsLogin(true)
    };
  
    const navigate = useNavigate();
    function redirect() {
      navigate("/");
    }
    return (
      <>
     
    
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>تسجيل الدخول</Heading>
          </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white')}
              boxShadow={'lg'}
              p={20}
            >
               <form>
  
              <Stack spacing={4}>
                <FormControl id="username">
                  <FormLabel>أسم المستخدم</FormLabel>
                  <Input
                    focusBorderColor='#1B668E'
                    type="text"
                    name="username"
                    onChange={handelUsername}
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel> كلمة المرور </FormLabel>
                  <Input
                    focusBorderColor='#1B668E'
                    type="password"
                    name="password"
                   onChange={handelePassword}
                    required
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}
                  >
                    <Checkbox>تذكرني</Checkbox>
                    <Link color={'#8863A2'} _hover={{color:"#8863A2"}}>نسيت كلمة المرور؟</Link>
                  </Stack>
                  <Button
                    bg={'#8863A2'}
                    color={'white'}
                    _hover={{
                      bg: '#8863A2',
                      color:"white"
                    }}
                   onClick={handelSubmit}
                  >
                   تسجيل الدخول
                  </Button>
                </Stack>
              </Stack>
              </form>
            </Box>
        </Stack>
      </Flex>
      </>
    );
  }
  