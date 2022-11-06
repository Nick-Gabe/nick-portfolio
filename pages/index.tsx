import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { Followers } from "../components/Followers";

interface Props {
  followers: Follower[];
}

const Home: NextPage<Props> = props => {
  return (
    <>
      <Followers followers={props.followers}/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const followers = await axios.get("http://localhost:3000/api/followers");

  return {
    props: {
      followers: followers.data,
    },
  };
};

export default Home;
