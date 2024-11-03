import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const Register = () => {

    const [user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
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

    // handleing the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
        const response = await fetch(`http://localhost:5000/api/auth/register`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const res_data = await response.json();
        console.log("res from server", res_data.message);
        
        if (response.ok)
        {
            storeTokenInLS(res_data.token);
            // localStorage.setItem("token", res_data.token);
            setUser({username:"",email:"", phone:"", password:""});
            toast.success("Registration Successfull");
            navigate("/login");
        }
        else{
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        }
        } catch (error) {
            console.log("register", error);
        }
    };

    return(
    <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img    
                            src="/image/register.png" 
                            alt="registration image"
                            width="500"
                            height="400"    
                        />
                    </div>

                    {/* Registration form code */}

                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registraion Form</h1>
                        <br />

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="Username"
                                    id="username" 
                                    required 
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter your email"
                                    id="email" 
                                    required 
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input 
                                    type="number" 
                                    name="phone" 
                                    placeholder="Phone"
                                    id="phone" 
                                    required 
                                    autoComplete="off"
                                    value={user.phone}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password"
                                    id="password" 
                                    required 
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </div>

                            <br />
                            <button type="submit" className="btn btn-submit">Register Now</button>
                        </form>

                    </div>
                </div>
            </div>
        </main>
    </section>

    </>
    )
};

