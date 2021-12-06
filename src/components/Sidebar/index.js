import {
  Flex,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  CloseButton,
  DrawerBody,
  IconButton,
  Icon,
  Spacer,
  Divider,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RiHomeLine } from 'react-icons/ri';
import { GoPackage } from 'react-icons/go';
import { MdFavorite, MdOutlineAccountCircle } from 'react-icons/md';

import ToggleTheme from '../ToggleTheme/index';
import Logo from '../Logo/index';

const SidebarButton = ({ title, icon }) => (
  <>
    <Flex
      py={1}
      px={4}
      m={1}
      color='contrast'
      align='center'
      borderRadius='full'
    >
      <Icon
        w={6}
        h={6}
        as={icon}
        mr={2}
        color={
          title === 'Wishlist'
            ? 'red.400' // eslint-disable-next-line react-hooks/rules-of-hooks
            : useColorModeValue('background', 'contrast')
        }
      />
      <Text
        fontWeight='bold'
        fontSize='lg'
        color={useColorModeValue('background', 'contrast')}
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
      <Flex justify='center' align='center' m='auto' maxW={['380px']} py={4}>
        <IconButton
          isRound='true'
          size='sm'
          icon={<HiOutlineMenuAlt1 />}
          onClick={onOpen}
        />
        <Spacer />
        <Logo />
        <Spacer />
        <ToggleTheme />
      </Flex>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' display='flex'>
            <Logo />
            <Spacer />
            <CloseButton onClick={onClose} />
          </DrawerHeader>
          <DrawerBody my={10}>
            <Stack spacing={2}>
              <SidebarButton title='Home' icon={RiHomeLine} />
              <SidebarButton title='My orders' icon={GoPackage} />
              <SidebarButton title='Wishlist' icon={MdFavorite} />
              <SidebarButton title='My account' icon={MdOutlineAccountCircle} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
