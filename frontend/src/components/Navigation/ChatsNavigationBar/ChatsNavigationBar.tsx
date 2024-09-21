import * as React from "react";
import {NavLink} from "react-router-dom";

const ChatsNavigationBar: React.FC = () => {

    const users = [
        {
            id: 'user-1',
            name: 'Beaver',
            image: 'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'
        }
    ]

    return (
        <div>
            {users.map((user) => (
                <NavLink to={`${user.id}`}>
                    <img src={user.image}/>
                    <h3>{user.name}</h3>
                </NavLink>
            ))}
        </div>
    );
}

export default ChatsNavigationBar;