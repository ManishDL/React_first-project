import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
    <Container w={'container.xl'} h={'100vh' } p={'15'}>
        <form>
            <VStack  h={'full'} alignItems={"strech"} w={['full', '100']}
          m={'auto'}
          my={'16'}>
                <Heading textAlign={'center'}>Sign In </Heading>
                <Input placeholder='Enter your Email' type='Email' border={'1px solid black'} margin={'10px 0'}required/>
                <Input placeholder='Enter your Password' type='password'  border={'1px solid black'} required margin={'10px 0'}/>
                <Button colorScheme='purple' variant={'outline'} margin={'10px 0'} type='submit'>
                    Sign Up
                </Button>
            </VStack>
        </form>
    </Container>
  )
}

export default Signup