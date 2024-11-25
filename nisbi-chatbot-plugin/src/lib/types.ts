export type ChatType = {
  userId: string;
  userName: string;
  isHost: boolean;
  feeds: {
    text: string;
    createdAt: string;
  }[];
};
