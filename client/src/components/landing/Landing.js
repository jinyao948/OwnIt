import "./Landing.css";
import { Input, Button } from "antd";

export default function Landing() { 

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:5001/api/users/",{
          method: "POST",
          body: JSON.stringify({
            email: event.target.email.value
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.status === 200) {
              console.log("Email has been saved")
            }
          })
    };

    return (
        <div className="landing">
            <h1 className="title">OwnIt!</h1>
            <h2 className="subtitle">
                Don't find your next customer, let them find you!
            </h2>
            <h3 className="mailing-list">Join our mailing list to find out more!</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
					placeholder="Email"
                />
                <input type="submit" value="Submit" className="submit-button" />
            </form>
        </div>
    );
}
