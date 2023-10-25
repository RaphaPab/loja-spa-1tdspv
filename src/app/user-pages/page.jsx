import { useEffect, useState } from "react";

export default async function  UserPages(){
    
    const response = await fetch("/api?git-users");
    if (response.ok){
        return response.json();
    } else {
        throw new Error("Error gettig users from API.")
    }
    const {users, setUsers} = useState([]);
        useEffect(() => {
            fetch("http://localhot:3000/api/git-users")
            .then((response)=> response.json())
            .then((response)=> setUsers(response))
            .catch(erros=> console.error(erros));
        }, [])


        console.log(users)
    

    return(
        <di>
            <h1>User Pages</h1>

            <div>
                <ul>
                    {
                        users.map(user)=>(
                            <li key={user.id}>
                                <figure>
                                    <Image
                                    scr={user.avaar_rl}
                                    alt="Avatar"
                                    width={50}
                                    height={50}/>
                                    <figcaption>{user.login}</figcaption>
                                </figure>
                            </li>
                        )
                    }
                </ul>
            </div>





        </di>
    )
}