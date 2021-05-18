import { VStack } from "@chakra-ui/react";

import { Post } from "components/Posts/Post";

export const Posts = ({ posts = [] }) => {
  return (
    <VStack as="ol" listStyleType="none" spacing="4">
      {posts.map(({ id, body, title }) => {
        return <Post key={id} id={id} body={body} title={title} />;
      })}
    </VStack>
  );
};
