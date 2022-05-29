import { useEffect, useState } from "react";

function MakeAdmin() {

    const [users, setUsers] = useState([]);
    useEffect
        (() => {
            fetch("http://localhost:5000/user")
                .then(res => res.json())
                .then(data => setUsers(data))
        }, [users]);

    const handleMakeAdmin = (e) => {
        e.preventDefault();
        let userEmail = e.target.userEmail.value;
        fetch(`http://localhost:5000/user/${userEmail}`, {
            method: "put",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ "role":"admin", }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div class="overflow-x-auto" >
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        users.map(user =>
                            <tr>
                                <td>{user.email}</td>

                                {
                                    !user.role &&
                                    <td>
                                        <form onSubmit={handleMakeAdmin}>
                                            <input type="hidden" name="userEmail" value={user.email} />
                                            <button type="submit" className='btn btn-xs btn-accent' >Make admin</button>
                                        </form>
                                    </td>
                                }


                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div >

    );
}

export default MakeAdmin;