import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean,
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right' >
          <Text>Pietro Rhyan</Text>
          <Text
            color='gray.300' fontSize='small'
          >
            pietroqjg@gmail.com
          </Text>
        </Box>
      )}
      
      <Avatar size='md' name='Pietro Rhyan' src='https://github.com/pietrorhyan.png' />
    </Flex>
  )
}