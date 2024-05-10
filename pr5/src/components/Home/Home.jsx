import Userimg from '/src/assets/user-banner.jpg'

const Home = () => {

    return (
        <>
            <div className='userbg'>
                <img src={Userimg} alt="userimg" className='w-100 h-100' />
            </div>
        </>
    )

}

export default Home