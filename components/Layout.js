import Navbar from './Navbar';
import { Container } from '@chakra-ui/react';


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container pt="90" maxW="container.md">
        {children}
      </Container>
    </>
  );
};

export default Layout;