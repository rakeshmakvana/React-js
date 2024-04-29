import Post from "../Post/Post"

const PostContainer = () => {

    return (
        <div className="post-container p-5">
            <div className="text-center">
                <h1>
                    Posts
                </h1>
            </div>
            <Post primg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5SFZyzTdRbZEz44xpGcOUOj12Z8QgndfNhcr4e-naw&s'} name={'ranjit makvana'} post={'https://e0.pxfuel.com/wallpapers/116/2/desktop-wallpaper-love-birds-beautiful-nature-background-thumbnail.jpg'} />
            <Post primg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuixzSE7GhrfWVc8c6hUOPmmbjM4ZoZNrLrEp3HtZWIw&s'} name={'raj patel'} post={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZesNl4eNwRUoSQuaiutbDpaH71FHzjdwJHfodxahPA&s'} />
            <Post primg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7XSyB_7ErLZNkxYs2JtYkZSa62avu8xC7YRW1bTsnw&s'} name={'priya shah'} post={'https://blog.gratefulness.me/content/images/2023/02/spring-quotes0.jpg'} />
        </div>
    )

}

export default PostContainer
