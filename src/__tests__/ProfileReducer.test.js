import ProfileReducer, { addPost } from "../Redux/Reducers/ProfileReducer";

//1. Start data
const initialState = {
    profile: null,
    status: "",
    posts: [
        {
            id: 1,
            text: "yoyo",
        },
        {
            id: 2,
            text: "hello world",
        },
        {
            id: 3,
            text: "hello!",
        }
        , {
            id: 4,
            text: "How are you doing?",
        }
    ],
};

it("posts length should be === 5", () => {
    //2. Action
    const action = addPost("new post");
    const newState = ProfileReducer(initialState, action);

    //3. Expectaions
    expect(newState.posts.length).toBe(5);
});