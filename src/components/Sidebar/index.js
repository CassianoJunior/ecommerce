import {
  Flex,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  IconButton,
  Icon,
  Spacer,
  Divider,
  Text,
  Link,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { darken } from '@chakra-ui/theme-tools';

import { HiOutlineMenuAlt1, HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { RiHomeLine } from 'react-icons/ri';
import { GoPackage } from 'react-icons/go';
import { MdFavorite, MdOutlineAccountCircle } from 'react-icons/md';

import ToggleTheme from '../ToggleTheme/index';
import Logo from '../Logo/index';

const SidebarButton = ({ title, icon }) => (
  <>
    <Flex p={2} color='contrast' align='center'>
      <Icon w={6} h={6} as={icon} mr={2} color='highlight' />
      <Text
        fontWeight='bold'
        fontSize='lg'
        color={useColorModeValue('background', 'contrast')}
        _hover={{ color: 'highlight' }}
      >
        <Link href='/'>{title}</Link>
      </Text>
    </Flex>
    <Divider />
  </>
);

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify='center'
        align='center'
        m='auto'
        w='100%'
        maxW={['380px']}
        py={2}
      >
        <IconButton
          isRound='true'
          size='sm'
          icon={<HiOutlineMenuAlt1 />}
          onClick={onOpen}
          bgColor={useColorModeValue(
            darken('complementary', 20),
            'complementary',
          )}
          color='background'
        />
        <Spacer />
        <Logo />
        <Spacer />
        <ToggleTheme />
      </Flex>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <Flex display='flex' align='center'>
              <Logo />
              <Spacer />
              <IconButton
                icon={<HiOutlineChevronDoubleLeft />}
                onClick={onClose}
                size='sm'
                bgColor={useColorModeValue(
                  darken('complementary', 20),
                  'complementary',
                )}
                color='background'
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody my={8} display='flex' flexDir='column'>
            <Stack spacing={2}>
              <SidebarButton title='Home' icon={RiHomeLine} />
              <SidebarButton title='My orders' icon={GoPackage} />
              <SidebarButton title='Wishlist' icon={MdFavorite} />
              <SidebarButton title='My account' icon={MdOutlineAccountCircle} />
            </Stack>
            <Spacer />
            <Flex align='center' justify='flex-end'>
              <Button
                bg='trasparent'
                border='2px solid'
                borderColor='highlight'
                color='highlight'
                mr={2}
                _hover={{ scale: 1.1, transform: 'auto' }}
              >
                Sign in!
              </Button>
              <Button bg='highlight' _hover={{ scale: 1.1, transform: 'auto' }}>
                Sign up!
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
