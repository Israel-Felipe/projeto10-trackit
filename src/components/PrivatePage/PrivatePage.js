import { Navigate } from "react-router-dom";

import Topo from "../topoEmenu/Topo";
import Menu from "../topoEmenu/Menu";

export default function PrivatePage({ children }) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return (
            <>
                <Topo image={user.image} />
                    {children}
                <Menu />
            </>
        )
    } else {
        return <Navigate to="/" />
    }
}