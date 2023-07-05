
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let url = "http://localhost:5000";

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");

  function fnameChange(e) {
    setFname(e.target.value);
    console.log(e.target.value);
  }
  function lnameChange(e) {
    setLname(e.target.value);
  }
  function userChange(e) {
    setUname(e.target.value);
  }
  function mailChange(e) {
    setMail(e.target.value);
  }
  function passChange(e) {
    setPass(e.target.value);
  }
  function cpassChange(e) {
    setCpass(e.target.value);
  }
  function sendData() {
    let data = {
      fname,
      lname: lname,
      username: uname,
      email: mail,
      password: pass,
      confirmPassword: cpass,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((message) => show(message))
        .catch((error) => console.error(error));
  }
  const show = (msg) => {
    console.log(msg.data);
    if (msg.data === "user created successfully") {
      toast.success(msg.data, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast.error(msg.data, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };
  return (
      <div className="signup">
        <h1 className="heading">
          <center>Signup Page</center>
        </h1>
        <div className="content">
          <div className="signupbody">
            <div className="firstrowlabel">
              <label>First Name</label>
              <label>Last Name</label>
            </div>
            <div className="firstrowinputs">
              <input
                  type="text"
                  placeholder="first name"
                  onChange={fnameChange}
              />
              <input type="text" placeholder="last name" onChange={lnameChange} />
            </div>
            <div className="secondrowlabel">
              <label>User Name</label>
              <label>E-mail</label>
            </div>
            <div className="secondrowinputs">
              <input type="text" placeholder="user name" onChange={userChange} />
              <input
                  type="text"
                  placeholder="example@gmail.com"
                  onChange={mailChange}
              />
            </div>
            <div className="thirdrowlabel">
              <label>Password</label>
              <label>Confirm Password</label>
            </div>
            <div className="thirdrowinputs">
              <input
                  type="password"
                  placeholder="password"
                  onChange={passChange}
              />
              <input
                  type="password"
                  placeholder="confirm password"
                  onChange={cpassChange}
              />
            </div>
            <button onClick={sendData} className="signupbtn">
              SignUp
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
  );
}

export default App;
