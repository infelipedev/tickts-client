import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";

export const Layout = ({ children, title }) => {
	return (
		<Container as="main" paddingBottom="4" paddingTop="8">
			<Head>
				<title>{title} - T!CKTS</title>
			</Head>
			<Heading as="h1" fontSize="md" marginBottom="8" textAlign="center">
				{title}
			</Heading>
			{children}
		</Container>
	);
};
