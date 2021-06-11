import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex alignItems="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Luí Matheo</Text>
                    <Text color="gray.300" fontSize="small">
                        luimatheo@gmail.com
                    </Text>
                </Box>
            )}
            
            <Avatar size="md" name="Lui Matheo" src="https://scontent.fjjg4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/92090717_1684433615044161_204194169864847360_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=5qPaluhxqQwAX-VBSaH&_nc_ht=scontent.fjjg4-1.fna&tp=6&oh=35fa05e2848f42c914b8e3002423737d&oe=60E8E11C" />
        </Flex>
    )
}