export default function Header() {
    return (
        <header className="card-header flex items-center justify-between px-4 lg:px-8  py-4">
            <h1 className="card-header-title text-3xl">The Company Of Landscapers</h1>
            <nav>
                <ul className="card-header-icon flex text-lg">
                    <li className="px-2"><a href="/">Home</a></li>
                    <li className="px-2"><a href="/about">About</a></li>
                    <li className="px-2"><a href="/services">Services</a></li>
                    <li className="px-2"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}   

