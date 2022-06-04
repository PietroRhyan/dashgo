import { Box, Button, Divider, Flex, Heading, HStack, Input, SimpleGrid, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex
        w='100%'
        my='6'
        maxWidth={1480}
        mx='auto'
        px='6'
      >
        <Sidebar />
        {/* Criar os labels manualmente */}

        <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

          <Divider my='6' borderColor='gray.500' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%' >
              <div>
                <label htmlFor="name">Nome completo</label>
                <Input name='name' mt='2'/>
              </div>

              <div>
                <label htmlFor="email">E-mail</label>
                <Input name='email' type='email' mt='2' />
              </div>
            </SimpleGrid>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%' >
              <div>
                <label htmlFor="password">Senha</label>
                <Input name='password' type='password' mt='2' />
              </div>

              <div>
                <label htmlFor="password_confirmation">Confirmação de senha</label>
                <Input name='password_confirmation' type='password' mt='2' />
              </div>
            </SimpleGrid>
          </VStack>

          <Flex
            mt='8' 
            justify='flex-end'

          >
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Button colorScheme='pink'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}