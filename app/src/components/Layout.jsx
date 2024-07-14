import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function RootLayout() {
    return (
        <div className="mx-auto flex flex-col min-h-svh">
            <Nav isMainNav={true} />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}