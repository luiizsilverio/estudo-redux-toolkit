import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeUser } from "../redux/userSlice"

const Login = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    function handleLogin() {
        dispatch(changeUser(name))
    }

    return (
        <form>
            <h1>Login</h1>
            <input type="text" 
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)} 
            />            
            <button type="button" onClick={handleLogin}>Login</button>
        </form>
    )
}

export default Login;
