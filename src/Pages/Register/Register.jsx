import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";

const Register = () => {

    const handleLogIn = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }

    return (
        <div>
        <Navbar></Navbar>
    <div className="hero bg-base-200 min-h-screen">
        
        <div className="hero-content flex-col ">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
                
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogIn} className="card-body w-96">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" required placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            <p>Already Have An Account ? <Link className="text-orange-400" to='/login'>LogIn</Link></p>
        </div>
    </div>
    </div> 
    );
};

export default Register;