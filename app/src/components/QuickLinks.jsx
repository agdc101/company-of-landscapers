import { useRef } from "react";
import { Link } from "react-router-dom";

export default function QuickLinks({globalData}) {

    console.log(globalData);
    const latestProjects = globalData.entries;
    const email = globalData.globalSet.email;
    const number = globalData.globalSet.phoneNumber;
    const address = globalData.globalSet.streetAddress;

    return (
        <section className="quicklinks bg-[#333333] text-white py-6 xl:py-12 px-2 xl:px-6">
            <div className="flex flex-col md:flex-row justify-center md:justify-between xl:justify-center pl-8 md:px-4 md:py-6">
                <div className="my-4 md:w-1/4 xl:ml-48">
                    <h3 className="text-xl xl:text-2xl mb-2 xl:mb-4 font-semibold">Quicklinks</h3>
                    <ul className="text-lg">
                        <li className="my-1"><Link className="font-light" to="/">Home</Link></li>
                        <li className="my-1"><Link to="/portfolio">Our Work</Link></li>
                        <li className="my-1"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="my-4 md:w-1/4">
                    <h3 className="text-xl xl:text-2xl mb-2 xl:mb-4 font-semibold">Latest Projects</h3>
                    <ul className="text-lg">
                        {latestProjects.map((project, index) => (
                            <li className="my-1" key={index}><Link to={`/portfolio/${project.slug}`}>{project.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="my-4 md:w-1/4">
                    <h3 className="text-xl xl:text-2xl mb-2 xl:mb-4 font-semibold">Contact us</h3>
                    <ul className="text-lg">
                        {address && <li className="my-1">{address}</li>}
                        {email && (
                            <li className="my-1">
                                <a href={`mailto:${email}`}>{email}</a>
                            </li>
                        )}
                        {number && <li className="my-1">{number}</li>}
                    </ul>

                </div>
            </div>
        </section>
    );
}