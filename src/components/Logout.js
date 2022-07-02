import { useDispatch } from "react-redux"
import { logout } from "../redux/userSlice"

const Logout = () => {
    const dispatch = useDispatch()
    
    function handleLogout() {
        dispatch(logout())
    }

    return (
        <div>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout;
