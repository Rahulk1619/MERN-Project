import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const Contact = () => {

  const defaultContactForm = {
    username:"",
    email:"",
    message:"",
  };

  const[contact, setContact] = useState({defaultContactForm});

  const[userData, setuserData] = useState(true);

  const { user }= useAuth();

  if(userData && user){
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setuserData(false);
  }

  // handleinput part
  const handleInput = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;


    // 1st Approach
    setContact({
        ...contact,
        [name]:value,
    });

    // 2nd Approach
    // setContact((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));

  };


  // handsubmit part
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch("http://localhost:5000/api/form/contact",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if(response.ok)
      {
        setContact(defaultContactForm);
        const data = await response.json();
        console.log(data);
        toast.success("message sent successfully");
      }

    } catch (error) {
      console.log(error);
      toast.error("message not sent");
    }


  };
    return(
      <>
        <section className="section-contact">
          <div className="contact-content container">
            <h1 className="main-heading">Contact Us</h1>
          </div>
          <div className="container grid grid-two-cols">
            {/* hero images  */}
            <div className="contact-image">
              <img src="/image/code-together1.jpg" alt="coding together"/>
            </div>


            <form onSubmit={handleSubmit}>
              <div className="section-form">
                <div>
                  <label htmlFor="username">Username</label>
                    <input  
                      type="text" 
                      name="username"
                      placeholder="Enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={contact.username}
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
                      value={contact.email}
                      onChange={handleInput}
                    />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <br />
                    <textarea
                      name="message" 
                      id="message"
                      cols="30"
                      rows="6"                   
                      required
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}
                    ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-submit">Submit</button>
                </div>

              </div>
            </form>
          </div>
          <section className="mb-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d839.9186564363844!2d72.8646905530366!3d19.299338867897525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1dc56ac4f03%3A0xc4328a9502fbd93b!2sSonam%20srivilas%2C%20phase%2015%2C%20new%20golden%20nest%2C%20bhayander%20east!5e1!3m2!1sen!2sin!4v1720453059700!5m2!1sen!2sin" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </section>
      </>
    )
};

