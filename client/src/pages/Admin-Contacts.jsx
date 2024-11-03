import { useEffect, useState } from "react";
import {useAuth} from "../store/auth";
import { toast } from "react-toastify";
export const AdminContacts = () => {
    const {authorizationToken} = useAuth();
    const [contactData, setcontactData] = useState([]);

    const getContactData = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });
            const data = await response.json();
            console.log("contact data: ",data);
            if(response.ok)
            {
                setcontactData(data);
            }
        } catch (error) {
            console.log(error); 
        }
    }

    const deleteContactData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
              method: "DELETE",
              headers: {
                Authorization: authorizationToken,
              },
            });
            const data = await response.json();
            console.log(`users after delete: ${data}`);
            if (response.ok) {
                getContactData(); // Refresh the user list after deletion
            }
        } catch (error) {
            console.log(error);
        }
    } 

    // defining fuction of deleteContactById
    const deleteContactById = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            if(response.ok){
                getContactData();
                toast.success("Deleted Successfully");
            } else {
                toast.error("Not Deleted");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getContactData();
    }, []);

    return (
        <>
            <section className="admin-contacts-section">
                <h1>Admin Contact Data</h1>

                <div className="container admin-users">
                {contactData.map((curContactData, index) => {

                    const { username, email, message, _id } = curContactData;

                return (
                    <div key={index}>
                        <p><b>Username: </b> {username}</p>
                        <p><b>Email: </b> {email}</p>
                        <p><b>Message: </b> {message}</p>
                        <button className="btn-delete" onClick={() => deleteContactById(_id)}>delete</button>
                    </div>
                );
                })}
                </div>
            </section>
            
        </>
    );
};