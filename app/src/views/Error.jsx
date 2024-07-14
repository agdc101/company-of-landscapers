import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link, useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();

    console.log(error);

    return (
        <div className="mx-auto flex flex-col min-h-svh">
            <Nav isMainNav={false} />
            <main className="flex-1 flex flex-col items-center justify-center" >
                <h1 className="text-4xl xl:text-5xl mb-6">404</h1>
                <p className="text-3xl">Page not found</p>
                <Link to="/" className="text-white mt-14 border p-2 rounded bg-emerald-700">Back to Home</Link>
            </main>
            <Footer />
        </div>
    );
}