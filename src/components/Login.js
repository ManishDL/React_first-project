import { Button, Container, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <Container height={"100vh"} maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
            <Container width={['50%','100']} bgColor={'rgb(128,0,128,0.13)'} h={'50%'} borderRadius={'20px'} padding={'12px'}>
            <VStack h={'full'} alignItems={"strech"} w={['full', '100']}
          m={'auto'}
          my={'16'}>
          <Heading textAlign={'center'}>Welcome Back</Heading>
            
                <Input placeholder='Enter your Email ... ' type='email' focusBorderColor={'purple.500'} border={'1px solid black'} required  style={{
                    margin:'15px 0'
                }}/>
                <Input placeholder='Enter Password ... ' type='password' focusBorderColor={'purple.500'} border={'1px solid black'} required style={{
                    margin:'15px 0'
                }}/>
                <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/forgetpassword'}>Forget Password?</Link>
                </Button>
                <Button variant={'outline'} colorScheme='purple' type='submit'>Log In </Button>
                <Button variant={'link'} alignSelf={'flex-end'} >
                    <Link to={"/signup"}>New user ? </Link>
                </Button>
        </VStack>
            </Container>
    </form>
    </Container>
  )
}

export default Login