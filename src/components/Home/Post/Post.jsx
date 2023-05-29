import React from "react";
import p from "./Post.module.css";
import Slider from "react-slick";
import Like from "./../../../assets/images/post__icons/Like.svg";
import Comment from "./../../../assets/images/post__icons/Comment.svg"
import Favorite from "./../../../assets/images/post__icons/Favorites.svg";

const Post = () => {

    const settings = {
        customPaging: function(i) {
            return (
                <div className={p.pagging + " " + p.active}></div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const arr = [1, 2, 3];

    const listOfPostImg = arr.map(slide => {
        return(
            <div className={p.post__slide}>

            </div>
        );
    })

    return (
        <div className={p.post__wrapper}>
            <div className={"container" + " " + p.post}>
                <div className={p.header}>
                    <div className={p.header__left}>
                        <div className={p.ava}>
                            {/* <img src="" alt="club-ava" /> */}
                        </div>
                        <div className={p.description__club}>
                            <h2>Interact</h2>
                            <span>Март 12, 2023</span>
                        </div>
                    </div>
                    <div className={p.header__right}>
                        <button>Подписаться</button>
                    </div>
                </div>
                <div className={p.post__body}>
                    <div className={p.post__images}>
                        <Slider {...settings}>
                            {listOfPostImg}
                        </Slider>
                    </div>
                    <div className={p.post__title}>
                        <h3>Дебатному клубу КНУ уже 2 года, а значит пришло время для ежегодного турнира 2023.</h3>
                    </div>
                </div>
                <div className={p.post__footer}>
                    <div className={p.footer__left}>
                        <ul className={p.footer__list}>
                            <li>
                                <button>
                                    <img src={Like} alt="post-like" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src={Comment} alt="post-comment" />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <img src={Favorite} alt="post-favorite" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className={p.footer__right}>
                        <div className={p.post__views}>
                            <img src="" alt="" />
                            <strong>14</strong>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
