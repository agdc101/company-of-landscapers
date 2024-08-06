import { useRef } from "react";
import { Link } from "react-router-dom";

export default function QuickLinks({globalData}) {

    console.log(globalData);
    const latestProjects = globalData.entries;
    const email = globalData.globalSet.email;
    const number = globalData.globalSet.phoneNumber;
    const address = globalData.globalSet.streetAddress;

    return (
        <section className="quicklinks bg-[#333333] text-white py-8 xl:py-12 px-2 xl:px-6">
            <div className="flex flex-col justify-center pl-8">
                <div className="my-4">
                    <h3 className="text-xl mb-2 font-semibold">Quicklinks</h3>
                    <ul>
                        <li><Link className="font-light" to="/">Home</Link></li>
                        <li><Link to="/portfolio">Our Work</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="my-4">
                    <h3 className="text-xl mb-2 font-semibold">Latest Projects</h3>
                    <ul>
                        {latestProjects.map((project, index) => (
                            <li key={index}><Link to={`/portfolio/${project.slug}`}>{project.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="my-4">
                    <h3 className="text-xl mb-2 font-semibold">Contact us</h3>
                    <ul>
                        {address && <li>{address}</li>}
                        {email && <li>{email}</li>}
                        {number && <li>{number}</li>}
                    </ul>
                </div>
            </div>
        </section>
    );
}