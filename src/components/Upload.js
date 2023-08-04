import { Button, Center, Container, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { Input } from '@chakra-ui/react'
const Upload = () => {
  return (
    <Container w={'container.xl'} height={'100vh'} p={'16'}>
        <VStack color={'purple.500'} justifyContent={'center'}  h={'full'}>
            <AiOutlineCloudUpload size={'10vmax'}/>
            <form>
                <HStack>
                <Input required type={'file'}  css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100%-36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}/>
                    <Button  type={'submit'}  colorScheme='purple'>
                        UPLOAD
                    </Button>
                </HStack>

            </form>
        </VStack>
    </Container>
  )
}

export default Upload