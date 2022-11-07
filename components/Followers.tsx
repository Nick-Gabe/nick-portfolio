import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { drawRandomElement, drawRandomNum } from "../utils/array";
interface IFollowerProps {
  followers: Follower[];
}

export const Followers = (props: IFollowerProps) => {
  const [intervalTime, setIntervalTime] = useState(2000);
  const [followers, setFollowers] = useState(props.followers.slice(100));
  const [gridSize, setGridSize] = useState(0);

  useEffect(() => {
    const switchRandomFollower = () => {
      const randomPos = drawRandomNum(0, followers.length);
      const followersCopy = [...followers];

      const unusedFollowers = props.followers.filter(
        x => !followers.some(f => f.id === x.id)
      );

      const newRandomFollower = drawRandomElement(unusedFollowers);
      followersCopy[randomPos] = newRandomFollower;

      setFollowers(followersCopy);
    };

    const interval = setInterval(() => {
      switchRandomFollower();
      setIntervalTime(drawRandomNum(300, 600));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [followers, intervalTime, props.followers]);

  useEffect(() => {
    const calculateGridSize = () => {
      const pixels = document.body.clientHeight * document.body.clientWidth;
      const pixPerGrid = pixels / 100;
      const gridRoot = Math.sqrt(pixPerGrid);
      setGridSize(gridRoot);
    };

    document.body.onresize = calculateGridSize;
    calculateGridSize();
  }, []);

  return (
    <Flex wrap="wrap" width="110vw" position="fixed">
      {followers.map((follower, i) => {
        return (
          <Image
            key={follower.login + i}
            src={follower.avatar_url}
            loading="lazy"
            animation="appear cubic-bezier(.76,1.86,.77,.71) 1s 0s backwards"
            alt=""
            style={{
              width: `${gridSize}px`,
              height: `${gridSize}px`,
              aspectRatio: 1 / 1,
            }}
          />
        );
      })}
    </Flex>
  );
};
