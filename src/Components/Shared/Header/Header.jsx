import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mb-4' src="/public/assets/logo.png" alt="" />
            <p className='mb-4'>Journalism Without Fear or Favour</p>
            <p className='font-bold mb-4'>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>

            <div className='flex items-center  p-2 w-full rounded-md bg-neutral-900'>
                <button className='btn btn-primary'>Latest</button>
                <marquee >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...</marquee>
            </div>
        </div>
    );
};

export default Header;