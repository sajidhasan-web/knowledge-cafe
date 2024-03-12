import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='container mx-auto px-6 md:px-12 py-5 flex justify-between items-center border-b-2'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img src={Profile} alt="" />
           
        </header>
    );
};

export default Header;