import { v4 as uuidv4 } from "uuid";

const dummyData = [{
    id: uuidv4(),
    title: "ðä»ãããããã¨",
    tasks: [
        {
            id: uuidv4(),
            title: "Reactã®åå¼·"
        },
        {
            id: uuidv4(),
            title: "å°±æ´»"
        },
        {
            id: uuidv4(),
            title: "æ£æ­©"
        },
    ],
}, {
    id: uuidv4(),
    title: "ðä»å¾ãããã¨",
    tasks: [
        {
            id: uuidv4(),
            title: "é¨æ´»"
        },
        {
            id: uuidv4(),
            title: "ã©ã³"
        },
    ],
}, {
    id: uuidv4(),
    title: "çµãã£ããã¨",
    tasks: [
        {
            id: uuidv4(),
            title: "oo"
        },
        {
            id: uuidv4(),
            title: "aa"
        },
    ],
}]

export default dummyData;