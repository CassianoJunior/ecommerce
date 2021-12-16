import React from 'react';
import Link from 'next/link';

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
  useColorModeValue,
  Button,
} from '@chakra-ui/react';

import { HiOutlineMenuAlt1, HiOutlineChevronDoubleLeft } from 'react-icons/hi';
import { RiHomeLine } from 'react-icons/ri';
import { GoPackage } from 'react-icons/go';
import { MdFavorite, MdOutlineAccountCircle } from 'react-icons/md';

import { IconType } from 'react-icons/lib';
import ToggleTheme from '../ToggleTheme/index';
import Logo from '../Logo/index';

interface ISidebarButton {
  title: string;
  icon: IconType;
  onClose: () => void;
}

const SidebarButton: React.FC<ISidebarButton> = ({
  title,
  icon,
  onClose,
}: ISidebarButton) => (
  <>
    <Flex p={2} color='contrast' align='center' onClick={onClose}>
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

const Sidebar: React.FC = () => {
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
          aria-label='openSidebar'
          isRound
          size='sm'
          icon={<HiOutlineMenuAlt1 />}
          onClick={onOpen}
          bgColor='complementary'
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
                aria-label='closeSidebar'
                icon={<HiOutlineChevronDoubleLeft />}
                onClick={onClose}
                size='sm'
                bgColor='complementary'
                color='background'
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody my={8} display='flex' flexDir='column'>
            <Stack spacing={2}>
              <SidebarButton onClose={onClose} title='Home' icon={RiHomeLine} />
              <SidebarButton
                onClose={onClose}
                title='My orders'
                icon={GoPackage}
              />
              <SidebarButton
                onClose={onClose}
                title='Wishlist'
                icon={MdFavorite}
              />
              <SidebarButton
                onClose={onClose}
                title='My account'
                icon={MdOutlineAccountCircle}
              />
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
