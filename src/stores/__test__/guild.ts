import { guild } from "../../types/guild";
import { Context, createContext } from "react";

export const TestWatchingGuild: Context<string> = createContext<string>("server_one");

export const TestGuildData: Context<guild[]> = createContext<guild[]>([
  {
    id: "server_one",
    name: "鯖1",
    topic: "星1とは違います",
    icon: "",

    channels: [
      {
        id: "a",
        channel_name: "spaceA",
        channel_topics: "this is A",
        channel_type: "text",
        channel_position: 0,
        creator_id: "0",
      },
      {
        id: "b",
        channel_name: "spaceB",
        channel_topics: "this is B",
        channel_type: "text",
        channel_position: 1,
        creator_id: "0",
      },
    ],
  },
  {
    id: "server_two",
    name: "鯖2",
    topic: "星2とは違います",
    icon: "",

    channels: [
      {
        id: "c",
        channel_name: "spaceC",
        channel_topics: "this is C",
        channel_type: "text",
        channel_position: 0,
        creator_id: "0",
      },
      {
        id: "d",
        channel_name: "spaceD",
        channel_topics: "this is D",
        channel_type: "text",
        channel_position: 1,
        creator_id: "0",
      },
    ],
  },
]);
