import { Container, Heading } from "@chakra-ui/react";

export const Layout = ({ children, heading }) => {
  return (
    <Container as="main" paddingY="8">
      <Heading as="h1" marginBottom="8">
        {heading}
      </Heading>
      {children}
    </Container>
  );
};
