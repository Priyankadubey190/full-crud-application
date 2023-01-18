import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
    Center,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
      <svg
        height={32}
        viewBox="0 0 120 28"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          d="M34.87 8.07H37.87V20.2H34.87V8.07ZM39.06 15.62C39.06 12.62 40.9 10.83 43.74 10.83C46.58 10.83 48.42 12.62 48.42 15.62C48.42 18.62 46.62 20.42 43.74 20.42C40.86 20.42 39.06 18.67 39.06 15.62ZM45.41 15.62C45.41 13.97 44.76 13 43.74 13C42.72 13 42.08 14 42.08 15.62C42.08 17.24 42.71 18.22 43.74 18.22C44.77 18.22 45.41 17.3 45.41 15.63V15.62ZM49.55 20.79H52.43C52.5671 21.0945 52.7988 21.3466 53.0907 21.5088C53.3826 21.6709 53.7191 21.7345 54.05 21.69C55.19 21.69 55.79 21.07 55.79 20.17V18.49H55.73C55.491 19.0049 55.1031 19.4363 54.6165 19.7287C54.1299 20.021 53.5668 20.1608 53 20.13C50.81 20.13 49.36 18.46 49.36 15.59C49.36 12.72 50.74 10.91 53.04 10.91C53.6246 10.8871 54.2022 11.0434 54.6955 11.3579C55.1888 11.6725 55.5742 12.1303 55.8 12.67V12.67V11H58.8V20.1C58.8 22.29 56.87 23.65 54.02 23.65C51.37 23.65 49.72 22.46 49.55 20.8V20.79ZM55.8 15.61C55.8 14.15 55.13 13.23 54.07 13.23C53.01 13.23 52.36 14.14 52.36 15.61C52.36 17.08 53 17.91 54.07 17.91C55.14 17.91 55.8 17.1 55.8 15.62V15.61ZM59.93 15.61C59.93 12.61 61.77 10.82 64.61 10.82C67.45 10.82 69.3 12.61 69.3 15.61C69.3 18.61 67.5 20.41 64.61 20.41C61.72 20.41 59.93 18.67 59.93 15.62V15.61ZM66.28 15.61C66.28 13.96 65.63 12.99 64.61 12.99C63.59 12.99 63 14 63 15.63C63 17.26 63.63 18.23 64.65 18.23C65.67 18.23 66.28 17.3 66.28 15.63V15.61ZM70.44 8.82C70.4321 8.51711 70.5144 8.2187 70.6763 7.96261C70.8383 7.70651 71.0726 7.50427 71.3496 7.38151C71.6266 7.25875 71.9338 7.221 72.2323 7.27305C72.5308 7.32511 72.8071 7.46462 73.0262 7.67389C73.2454 7.88317 73.3974 8.1528 73.4631 8.44859C73.5288 8.74438 73.5052 9.05301 73.3952 9.33536C73.2853 9.61772 73.094 9.86108 72.8456 10.0346C72.5973 10.2081 72.3029 10.304 72 10.31C71.7992 10.3238 71.5977 10.2959 71.4082 10.2281C71.2186 10.1603 71.0452 10.0541 70.8987 9.91601C70.7522 9.77796 70.6358 9.61111 70.5569 9.42594C70.4779 9.24077 70.4381 9.04128 70.44 8.84V8.82ZM70.44 11.02H73.44V20.2H70.44V11.02ZM84.33 15.61C84.33 18.61 83 20.32 80.72 20.32C80.1354 20.3575 79.5533 20.2146 79.0525 19.9106C78.5517 19.6065 78.1564 19.156 77.92 18.62H77.86V23.14H74.86V11H77.86V12.64H77.92C78.1454 12.0951 78.5332 11.6329 79.0306 11.3162C79.528 10.9995 80.1109 10.8437 80.7 10.87C83 10.91 84.37 12.63 84.37 15.63L84.33 15.61ZM81.33 15.61C81.33 14.15 80.66 13.22 79.61 13.22C78.56 13.22 77.89 14.16 77.88 15.61C77.87 17.06 78.56 17.99 79.61 17.99C80.66 17.99 81.33 17.08 81.33 15.63V15.61ZM89.48 10.81C91.97 10.81 93.48 11.99 93.55 13.88H90.82C90.82 13.23 90.28 12.82 89.45 12.82C88.62 12.82 88.25 13.14 88.25 13.61C88.25 14.08 88.58 14.23 89.25 14.37L91.17 14.76C93 15.15 93.78 15.89 93.78 17.28C93.78 19.18 92.05 20.4 89.5 20.4C86.95 20.4 85.28 19.18 85.15 17.31H88.04C88.13 17.99 88.67 18.39 89.55 18.39C90.43 18.39 90.83 18.1 90.83 17.62C90.83 17.14 90.55 17.04 89.83 16.89L88.1 16.52C86.31 16.15 85.37 15.2 85.37 13.8C85.39 12 87 10.83 89.48 10.83V10.81ZM103.79 20.18H100.9V18.47H100.84C100.681 19.0441 100.331 19.5466 99.8468 19.8941C99.3629 20.2415 98.7748 20.413 98.18 20.38C97.7242 20.4059 97.2682 20.3337 96.8427 20.1682C96.4172 20.0027 96.0322 19.7479 95.7137 19.4208C95.3952 19.0938 95.1505 18.7021 94.9964 18.2724C94.8422 17.8427 94.7821 17.3849 94.82 16.93V11H97.82V16.24C97.82 17.33 98.38 17.91 99.31 17.91C99.5281 17.9104 99.7437 17.8643 99.9425 17.7746C100.141 17.6849 100.319 17.5537 100.463 17.3899C100.606 17.226 100.714 17.0333 100.777 16.8247C100.84 16.616 100.859 16.3962 100.83 16.18V11H103.83L103.79 20.18ZM105.24 11H108.14V12.77H108.2C108.359 12.2035 108.702 11.7057 109.174 11.3547C109.646 11.0037 110.222 10.8191 110.81 10.83C111.409 10.7821 112.003 10.9612 112.476 11.3318C112.948 11.7024 113.264 12.2372 113.36 12.83H113.42C113.601 12.2309 113.977 11.7093 114.488 11.3472C114.998 10.9851 115.615 10.8031 116.24 10.83C116.648 10.8163 117.054 10.8886 117.432 11.0422C117.811 11.1957 118.152 11.4272 118.435 11.7214C118.718 12.0157 118.936 12.3662 119.075 12.7501C119.213 13.134 119.27 13.5429 119.24 13.95V20.2H116.24V14.75C116.24 13.75 115.79 13.29 114.95 13.29C114.763 13.2884 114.577 13.327 114.406 13.4032C114.235 13.4794 114.082 13.5914 113.958 13.7317C113.834 13.872 113.741 14.0372 113.686 14.2163C113.631 14.3955 113.616 14.5843 113.64 14.77V20.2H110.79V14.71C110.79 13.79 110.34 13.29 109.52 13.29C109.331 13.2901 109.143 13.3303 108.971 13.408C108.798 13.4858 108.643 13.5993 108.518 13.741C108.392 13.8827 108.298 14.0495 108.241 14.2304C108.185 14.4112 108.167 14.6019 108.19 14.79V20.2H105.19L105.24 11Z"
          fill="currentColor"
        />
        <path
          d="M26.48 8.62001C25.9711 7.45637 25.2975 6.37195 24.48 5.40001C23.2714 3.92035 21.7632 2.71341 20.0546 1.85862C18.346 1.00383 16.4758 0.520582 14.567 0.440674C12.6582 0.360766 10.7541 0.68601 8.98 1.395C7.20594 2.104 5.60214 3.18067 4.27417 4.55414C2.94619 5.92762 1.92414 7.56676 1.27529 9.36369C0.626436 11.1606 0.365493 13.0746 0.509634 14.9796C0.653775 16.8847 1.19973 18.7376 2.11157 20.4164C3.02341 22.0953 4.28046 23.562 5.79998 24.72C6.77498 25.4779 7.85233 26.094 8.99998 26.55C10.609 27.2094 12.3311 27.549 14.07 27.55C17.6594 27.5421 21.0992 26.1113 23.6354 23.5713C26.1717 21.0314 27.5973 17.5894 27.6 14C27.6026 12.1485 27.2213 10.3166 26.48 8.62001V8.62001ZM14.06 3.19001C15.6215 3.18984 17.1642 3.53115 18.58 4.19001V4.19001C18.2347 4.33918 17.8718 4.44337 17.5 4.50001C16.2766 4.67711 15.1432 5.24509 14.2691 6.11918C13.3951 6.99328 12.8271 8.12661 12.65 9.35001C12.5722 10.0361 12.2602 10.6744 11.7665 11.1572C11.2728 11.64 10.6277 11.9377 9.93998 12C8.71657 12.1771 7.58324 12.7451 6.70915 13.6192C5.83505 14.4933 5.26707 15.6266 5.08998 16.85C5.03002 17.5024 4.75167 18.1155 4.29998 18.59V18.59C3.52063 16.9433 3.17053 15.1261 3.28225 13.3077C3.39397 11.4893 3.96388 9.72871 4.93895 8.18976C5.91401 6.65081 7.26255 5.38353 8.85905 4.50586C10.4555 3.62819 12.2481 3.16865 14.07 3.17001L14.06 3.19001ZM5.78998 21C5.90998 20.89 6.02998 20.79 6.14998 20.67C7.03963 19.8075 7.61069 18.6689 7.76998 17.44C7.83456 16.7493 8.14298 16.1041 8.63998 15.62C9.11822 15.1222 9.76195 14.8163 10.45 14.76C11.6734 14.5829 12.8067 14.0149 13.6808 13.1408C14.5549 12.2667 15.1229 11.1334 15.3 9.91001C15.3432 9.18752 15.6533 8.50685 16.17 8.00001C16.66 7.51186 17.3099 7.21711 18 7.17001C19.1239 7.01537 20.1721 6.51573 21 5.74001C21.9426 6.52208 22.7413 7.46291 23.36 8.52001C23.322 8.57136 23.2784 8.61832 23.23 8.66001C22.7526 9.16221 22.1098 9.47477 21.42 9.54001C20.1953 9.71401 19.0603 10.281 18.1856 11.1557C17.311 12.0303 16.744 13.1654 16.57 14.39C16.4995 15.0784 16.1932 15.7213 15.7029 16.2098C15.2127 16.6982 14.5687 17.0021 13.88 17.07C12.653 17.2458 11.5154 17.8126 10.6363 18.6863C9.75713 19.5601 9.18328 20.6941 8.99998 21.92C8.94616 22.4087 8.77832 22.878 8.50998 23.29C7.48397 22.6808 6.56506 21.9072 5.78998 21V21ZM14.06 24.86C13.0452 24.8611 12.0354 24.7197 11.06 24.44C11.3936 23.818 11.6106 23.1402 11.7 22.44C11.7701 21.7531 12.0749 21.1114 12.5632 20.6232C13.0514 20.135 13.6931 19.8301 14.38 19.76C15.6052 19.5849 16.7408 19.0178 17.6168 18.1435C18.4929 17.2693 19.0624 16.1349 19.24 14.91C19.3101 14.2231 19.6149 13.5814 20.1032 13.0932C20.5914 12.605 21.2331 12.3001 21.92 12.23C22.842 12.1101 23.7208 11.7668 24.48 11.23C24.9015 12.8279 24.9515 14.5012 24.626 16.1214C24.3004 17.7416 23.6081 19.2657 22.6021 20.5768C21.5961 21.8879 20.3031 22.9511 18.8224 23.6849C17.3417 24.4187 15.7125 24.8036 14.06 24.81V24.86Z"
          fill="#2F855A"
        />
      </svg>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box 
        bg="#dadada"
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>USES</ListHeader>
              <Link href={'#'}>Marketing video</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Video ad</Link>
                {/* <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  New
                </Tag> */}
              </Stack>
              <Link href={'#'}>How-video</Link>
              <Link href={'#'}>Slideshow video</Link>
              <Link href={'#'}>Social media</Link>
              <Link href={'#'}>Promo video</Link>
              <Link href={'#'}>Birthday video</Link>
              <Link href={'#'}>Intro / Outro videos</Link>
              <Link href={'#'}>Explainer video</Link>
              <Link href={'#'}>Email marketing </Link>
              <Link href={'#'}>Training video </Link>
              <Link href={'#'}>Internal communications video</Link>
              <Link href={'#'}> Presentation video</Link>
              

            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>ANIMOTO FOR</ListHeader>
              <Link href={'#'}>Business</Link>
              <Link href={'#'}> Photography</Link>
              <Link href={'#'}> Real Estate</Link>
              <Link href={'#'}> Non-profit</Link>
              <Link href={'#'}>Education </Link>
              <Link href={'#'}>Ecommerce </Link>
              <Link href={'#'}>Fitness</Link>
              <Link href={'#'}>Marketing Agency</Link>
              <Link href={'#'}>HR / People Ops</Link>
              <Link href={'#'}>Corporate</Link>
              
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>FEATURS</ListHeader>
              <Link href={'#'}>Video commenting tool</Link>
              <Link href={'#'}>Screen recorder</Link>
              <Link href={'#'}>Photo video maker</Link>
              <Link href={'#'}>Music library</Link>
              <Link href={'#'}>Online video editor</Link>
              <Link href={'#'}>Templates</Link>
              <Link href={'#'}>Video trimming</Link>
              <Link href={'#'}>Stock library</Link>
              <Link href={'#'}>Voice over</Link>
             
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>COMPANY</ListHeader>
              <Link href={'#'}>Support</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Affiliates</Link>
              <Link href={'#'}>Privacy policy</Link>
              <Link href={'#'}>Terms of use</Link>
              <Link href={'#'}>Animoto Tutorials</Link>
              

            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>CONNECT</ListHeader>
              {/* <Link href={'#'}>Facebook</Link> */}
              {/* <Flex>
                <Image src='https://www.internetmatters.org/wp-content/uploads/2021/03/facebook-logo-new.png' />
                <Image src='' />
                <Image src='' />
                <Image src='' />
                <Image src='' />

              </Flex> */}
              <Image src='https://chessdailynews.com/wp-content/uploads/2016/08/Social-Media-Icons.jpg' />
              <Link href={'#'}>
                <Image src='https://animoto.com/static/FacebookPartnerIcon-4f675b081bec613dbac01a85deceacb3.svg' h='50px' />
              </Link>
              <Link href={'#'}>
                <Image src= 'data:image/png;base64,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' h='30px' / >
              </Link>
              {/* <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link> */}
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10} bg='#232323'>
          {/* <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
             <Logo /> 
          </Flex> */}
          <Center>
          <Image src='https://animoto.com/static/Logo-769512d18812f2135069123e6840b976.svg' />
          </Center>
          <Text pt={6} textAlign={'center'} color='grey' fontSize='20px'>
            © 2022  Welcome to our website. All Rights Reserved. 
          </Text>
        </Box>
      </Box>
    );
  }