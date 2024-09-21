import { ObjectId } from "mongodb";
import { Project } from "../src/models/Project";

export default [
  {
    _id: new ObjectId("639d1d73d8de05d533d73b78"),
    name: "First project",
    description: "This is a test for the first project created using the modal",
    id: "DnmNon9PP",
    userId: "brad@mail.com",
    updatedAt: 1671241075462,
    createdAt: 1671241075462,
    imageUrl:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    color: "#a9ec6c",
  },
  {
    _id: new ObjectId("639d20a0d8de05d533d73b79"),
    name: "Second project",
    description: "Another project to fill out the page a bit more",
    id: "J5AImhto!",
    userId: "brad@mail.com",
    updatedAt: 1671241888221,
    createdAt: 1671241888221,
    imageUrl:
      "https://images.unsplash.com/photo-1449496967047-2a322e78ec26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
    access: "PRIVATE",
    color: "#792b47",
  },
  {
    _id: new ObjectId("639d2112d8de05d533d73b7a"),
    name: "Third project",
    description: "And one more...",
    id: "bYJtxY5a5",
    userId: "brad@mail.com",
    updatedAt: 1671242002320,
    createdAt: 1671242002320,
    imageUrl:
      "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    color: "#e70e42",
  },
  {
    _id: new ObjectId("639d2124d8de05d533d73b7b"),
    name: "Fourth project",
    description: "And another!",
    id: "nuU4ulmgf",
    userId: "brad@mail.com",
    updatedAt: 1671242020233,
    createdAt: 1671242020233,
    imageUrl:
      "https://images.unsplash.com/photo-1548371836-9f0b75a62d8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: new ObjectId("639d2877d8de05d533d73b7c"),
    name: "Test for navigation",
    description: "Will it work...?",
    id: "iUtmQvvm5",
    userId: "brad@mail.com",
    updatedAt: 1671243895296,
    createdAt: 1671243895296,
    imageUrl:
      "https://images.unsplash.com/photo-1547628641-ec2098bb5812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: new ObjectId("639e7ba7d8de05d533d73b7d"),
    name: "No picture",
    description: "This project doesn't have an imageUrl property",
    id: "BRYs6EzW5",
    userId: "brad@mail.com",
    color: "#ff0076",
    updatedAt: 1671330727760,
    createdAt: 1671330727760,
  },
  {
    _id: new ObjectId("63df6254e5092a00cef5c76e"),
    name: "Football Training",
    description: "About our training program",
    id: "kP5fRnigv",
    userId: "brad@mail.com",
    color: "#53e2bd",
    imageUrl:
      "https://images.unsplash.com/photo-1527950285759-4d9f1b69c461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTk1NTl8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyYWluaW5nfGVufDB8MHx8fDE2NzU1ODQwNjU&ixlib=rb-4.0.3&q=80&w=1080",
    updatedAt: 1675584084777,
    createdAt: 1675584084777,
  },
  {
    _id: new ObjectId("63ecbdd5f3e03fdb7856f42b"),
    name: "Sydney",
    description: "A city in Aus",
    id: "DJmD8kNZV",
    userId: "brad@mail.com",
    color: "#3781cd",
    imageUrl:
      "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTk1NTl8MHwxfHNlYXJjaHw0fHxzeWRuZXl8ZW58MHwwfHx8MTY3NjQ1MTg2MA&ixlib=rb-4.0.3&q=80&w=1080",
    updatedAt: 1676459477621,
    createdAt: 1676459477621,
  },
  {
    _id: new ObjectId("63ee0d47b1fe996f0404b697"),
    name: "Manchester City",
    description: "Football club",
    id: "or6l7kQcR",
    userId: "brad@mail.com",
    color: "#d41ece",
    imageUrl:
      "https://images.unsplash.com/photo-1555862124-94036092ab14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTk1NTl8MHwxfHNlYXJjaHwxfHxtYW5jaGVzdGVyJTIwY2l0eXxlbnwwfDB8fHwxNjc2NTQ1MzM1&ixlib=rb-4.0.3&q=80&w=1080",
    updatedAt: 1676545351865,
    createdAt: 1676545351865,
  },
  {
    _id: new ObjectId("648ec56042f860861f1f976c"),
    name: "Road Ahead",
    description: "Some notes on the next few months",
    id: "RLkP50mDD",
    userId: "brad@mail.com",
    color: "#287247",
    imageUrl:
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTk1NTl8MHwxfHNlYXJjaHwzN3x8YmFja2dyb3VuZHN8ZW58MHwwfHx8MTY4NzA3ODIxOHww&ixlib=rb-4.0.3&q=80&w=1080",
    updatedAt: 1687078240315,
    createdAt: 1687078240315,
  },
  {
    _id: new ObjectId("648eceff263739485f2b9c88"),
    name: "Testing Colour Select",
    description: "A test project.",
    id: "izN@I7lfr",
    userId: "brad@mail.com",
    color: "#dc2626",
    imageUrl:
      "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTk1NTl8MHwxfHNlYXJjaHw0fHxyZWR8ZW58MHwwfHx8MTY4NzA4MDY5Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    updatedAt: 1687080703745,
    createdAt: 1687080703745,
  },
] as Project[];
