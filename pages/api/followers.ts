import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export type FollowersData = Follower[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FollowersData>
) {
  const followers = await axios.get(
    "https://api.github.com/users/Nick-Gabe/followers?per_page=100"
  );
  res.status(200).json(followers.data);
}
