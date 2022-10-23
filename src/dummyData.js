import { v4 as uuidv4 } from "uuid";

const dummyData = [{
    id: uuidv4(),
    title: "📝今からやること",
    tasks: [
        {
            id: uuidv4(),
            title: "Reactの勉強"
        },
        {
            id: uuidv4(),
            title: "就活"
        },
        {
            id: uuidv4(),
            title: "散歩"
        },
    ],
}, {
    id: uuidv4(),
    title: "📝今後やること",
    tasks: [
        {
            id: uuidv4(),
            title: "部活"
        },
        {
            id: uuidv4(),
            title: "ラン"
        },
    ],
}, {
    id: uuidv4(),
    title: "終わったこと",
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