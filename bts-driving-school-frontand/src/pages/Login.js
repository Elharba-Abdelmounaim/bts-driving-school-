import { useState } from "react";
import api from "../api/axios";

export default function Login() {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("")

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("token/", {username, password});
      console.log(response.data) //tokens => {access +++ refrech }
      localStorage.setItem("access_token", response.data.access); //token access time => 5min - 15min
      localStorage.setItem("refresh_token", response.data.refresh); //token refresh time => day > mounth | work "API request" in access |
      
      
      alert("Login successful!");

    } catch(err){
      console.error(err);
      alert("Login failed!")
    }
  }

  return (
    <div style={{maxWidth:"400px", margin:"50px auto"}}>
      <h2>Login</h2>
    <form onSubmit={handleSumbit} >
      <dev>
        <lebel>Username </lebel>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)}/>
      </dev>

      <div>
        <lebel>Password </lebel>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
      </div>
      <button type="submit">Login</button>
    </form>
    
    </div>
  );
}