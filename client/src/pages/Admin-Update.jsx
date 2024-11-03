import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const AdminUpdate = () => {

    const [data, setData] = useState({
        username:"",
        email:"",
        mobile:"",
    });

    const params = useParams();
    console.log("params single user: ",params);
    const { authorizationToken } = useAuth();
   
    // get single user data
    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
                method:"GET",
                headers:{
                    "Authorization": authorizationToken,
                },
            });    
            const data = await response.json();
            console.log(`user single data,${data}`);    
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    // handling input value
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]:value,
        });
    };

    // to update the data dynamically
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body:JSON.stringify(data),
            }
        );
        if(response.ok){
            toast.success("Updated successfully");
        }else{
        toast.success("Not Updated");
        }
        }

        catch (error) 
        {
            console.log(error);
        }
    }

    return(
    <>
    <section>
        <main>
            <div className="section-update">
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

                    <div className="update-form">
                        <h1 className="main-heading mb-3">Update User Data</h1>
                        <br />

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="username"
                                    id="username" 
                                    required 
                                    autoComplete="off"
                                    value={data.username}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="enter your email"
                                    id="email" 
                                    required 
                                    autoComplete="off"
                                    value={data.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">mobile</label>
                                <input 
                                    type="number" 
                                    name="phone" 
                                    placeholder="phone"
                                    id="phone" 
                                    required 
                                    autoComplete="off"
                                    value={data.phone}
                                    onChange={handleInput}
                                />
                            </div>

                            <br />
                            <button type="submit" className="btn btn-submit">Update</button>
                        </form>

                    </div>
                </div>
            </div>  
        </main>
    </section>

    </>
    )
};

