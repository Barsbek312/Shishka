import React from "react";
import h from "./Home.module.css";
import HomeSlider from "./HomeSlider/HomeSlider";
import Post from "./Post/Post";

const Home = () => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

    const listOfPosts = arr.map(item => {
        return (
            <Post />
        )
    })

    return (
        <main>
            <div className="container">
                <h1 className={h.title}>Главная</h1>
                <HomeSlider />
            </div>
            <div className={h.posts__wrapper}>
                {listOfPosts}
            </div>
        </main>
    )
}

export default Home;