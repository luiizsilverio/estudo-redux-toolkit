import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

const User = () => {
    const user = useSelector(state => state.user)
    // ou: const user = useSelector(selectUser)
    
    console.log(user)

    return (
        <div>
            <h1>Usuário: { user.name }</h1>
        </div>
    )
}

export default User;
