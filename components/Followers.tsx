import Image from "next/image";
import { Flex } from "@chakra-ui/react";

interface IFollowerProps {
  followers: Follower[];
  size?: number;
}

export const Followers = (props: IFollowerProps) => {
  const { followers, size = 100 } = props;

  return (
    <Flex pos="fixed" wrap="wrap" h="100vh" w="150vw" backgroundColor="salmon">
      {followers.map(follower => {
        return (
          <Image
            key={follower.login}
            src={follower.avatar_url}
            alt=""
            width={size}
            height={size}
            style={{
              minWidth: "10vw",
              aspectRatio: 1 / 1,
            }}
          />
        );
      })}
    </Flex>
  );
};
