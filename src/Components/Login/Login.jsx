import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState ,useEffect} from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { Link, Navigate } from 'react-router-dom';
import { login } from '../Actions/user';
import toast from 'react-hot-toast';
  
  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const dispatch = useDispatch();
    const {loading ,isAuthenticated,message,error}=useSelector( state=>state.user);
  
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email, password));
    };
    useEffect(() => {
      if(isAuthenticated){
        <Navigate to={"/home"} />
       }
      if(message){
        toast.success(message)
      }
      else{
        toast.error(error)
      }
    
      
    }, [dispatch,isAuthenticated])
      
      
    return (  


      <Container h={'95vh'}>
        <VStack h={'full'} justifyContent="center" spacing={'16'}>
          <Heading children={'Welcome to CourseBit'} />
  
          <form onSubmit={submitHandler} style={{ width: '100%' }}>
            <Box my={'4'}>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={'email'}
                focusBorderColor="yellow.500"
              />
            </Box>
  
            <Box my={'4'}>
              <FormLabel htmlFor="password" children="Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Your Password"
                type={'password'}
                focusBorderColor="yellow.500"
              />
            </Box>
  
            <Box>
              <Link to="/forgotPassword">
                <Button isLoading={loading} fontSize={'sm'} variant="link">
                  Forget Password?
                </Button>
              </Link>
            </Box>
  
            <Button my="4" colorScheme={'yellow'} type="submit">
              Login
            </Button>
  
            <Box my="4">
              New User?{' '}
              <Link to="/register">
                <Button colorScheme={'yellow'} variant="link">
                  Sign Up
                </Button>{' '}
                here
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    );
  };
  
  export default Login;
  