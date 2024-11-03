import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const Login = () => {

    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    // handling input value
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        });
    };


    // handling thr form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const res_data = await response.json();
        if(response.ok)
        {
            // alert("Login successfull");
            storeTokenInLS(res_data.token);
            localStorage.setItem("token", res_data.token);
            setUser({email:"",password:""});
            toast.success("Login Successfull");

            navigate("/");
        }
        else
        {
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            console.log("Invalid credentials");
        }
        console.log(response); 
    } catch (error) {
        console.log("login", error);
    }

    };
    return (
    <>
    <section>
        <main>
            <div className="section-login">
                <div className="container grid grid-two-cols">
                    <div className="login-image">
                        <img 
                            src="/image/login.png" 
                            alt="login-image"
                            width="500"
                            height="400"
                            
                        />
                    </div>

                    {/* login code */}

                    <div className="login-form">
                        <h1 className="main-heading mb-3">Login form</h1>
                        <br />

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="enter your email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">password</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    placeholder="enter your password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </div>
                            <br />

                            <button type="submit" className="btn btn-submit">Login Now</button>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    </section>
    </>
    )
};

