import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function RootLayout() {
    return (
        <div className="mx-auto">
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    );
}