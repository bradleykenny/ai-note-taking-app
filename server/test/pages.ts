import { ObjectId } from "mongodb";
import { Page } from "../src/models/Page";

export default [
  {
    _id: new ObjectId("63afcacb5beb759ea7f2d1f2"),
    title: "Oops",
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Accidentally deleted all the pages... ",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              marks: [
                {
                  type: "strike",
                },
                {
                  type: "highlight",
                },
              ],
              text: "hidethepain",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Text example...",
            },
          ],
        },
      ],
    },
    id: "ugNiwomAP",
    projectId: "DnmNon9PP",
    userId: "brad@mail.com",
    updatedAt: 1686570835237,
    createdAt: 1672465099486,
  },
  {
    _id: new ObjectId("63afcb115beb759ea7f2d1f3"),
    title: "Another page",
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Just trying to refill the pages that went missing so I have some content to show off.",
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "These are some words.",
            },
          ],
        },
        {
          type: "paragraph",
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "And some more words.",
            },
          ],
        },
      ],
    },
    id: "de05!KJ1i",
    projectId: "izN@I7lfr",
    userId: "brad@mail.com",
    updatedAt: 1686920023534,
    createdAt: 1672465169934,
  },
  {
    _id: new ObjectId("63ed4a77f3e03fdb7856f42c"),
    title: "New page to test endpoints",
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Content here. With some more here.",
            },
          ],
        },
      ],
    },
    id: "nZ5FI8HGT",
    userId: "brad@mail.com",
    updatedAt: 1686919514158,
    createdAt: 1676495479192,
    projectId: "izN@I7lfr",
  },
  {
    _id: new ObjectId("63f1bc4c9bf6bc9e33b4f479"),
    title: "Planning document",
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Planning",
            },
          ],
        },
      ],
    },
    id: "VHkjRbr0U",
    userId: "user2@mail.com",
    updatedAt: 1676786764980,
    createdAt: 1676786764980,
  },
  {
    _id: new ObjectId("63f1bc579bf6bc9e33b4f47a"),
    title: "Coming up",
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Another document",
            },
          ],
        },
      ],
    },
    id: "QwItiFMXy",
    userId: "brad@mail.com",
    updatedAt: 1676786775627,
    createdAt: 1676786775627,
  },
] as Page[];
