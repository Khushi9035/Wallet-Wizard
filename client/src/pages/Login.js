import React,{useState,useEffect} from 'react'
import {Form,Input,message} from 'antd'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import "../styles/LoginPage.css";




const Login = () => {
  // const img=
  // "https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW4lMjBwYWdlfGVufDB8fDB8fHww";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

    const submitHandler=async(values)=>{
      try {
        setLoading(true);
        const { data } = await axios.post("/users/login", values);
        setLoading(false);
        message.success("login success");
        localStorage.setItem(
          "user",
          JSON.stringify({ ...data.user, password: "" })
        );
        navigate("/");
      } catch (error) {
        setLoading(false);
        message.error("something went wrong");
      }
      };

       //prevent for login user
    useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
   <>
     <div className='login-page'>
     {loading && <Spinner />}
     <div className="row container">
          <h1 className='heading'>Wallet Wizard</h1>
          {/* <div className="col-md-6">
            <img src={img} alt="login-img" width={"100%"} height="100%" />
          </div> */}
          <div className="col-md-4 login-form">
       <Form layout='vertical' onFinish={submitHandler}>
       <h1>Login Form</h1>
        <Form.Item label='Email' name="email">
          <Input type='email'/>
        </Form.Item>
        <Form.Item label='Password' name="password">
          <Input type='password'/>
        </Form.Item>
        <div className='d-flex justify-content-between'>
          <Link to="/register">New User? Click here to register</Link>
          <button className='btn btn-primary'>Login</button>
        </div>
       </Form>
      </div>
      </div>
      </div>
   </>
  )
}

export default Login