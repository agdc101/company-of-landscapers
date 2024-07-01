import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
    return (
        <div className="container mx-auto">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}