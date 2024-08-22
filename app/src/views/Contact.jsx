import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Hero from '@/components/Hero';
import Error from './Error';
import Loading from './Loading';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import framerAnimations from '@/utils/framer-anims';

export const Contact = () => {
    const { contactData, error, loading } = useLoaderData();
    console.log(contactData.globalSet);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('contact_form_service', 'template_6ku2azn', form.current, {
            publicKey: 'GsRrK0jMcTebFw0Jp',
        })
        .then( 
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    if (loading) return <Loading/>;
    if (error) return <Error/>;

    return (
        <>
            <Hero imageUrl={contactData.contactEntries[0].heroImage[0].url} imageAlt={contactData.contactEntries[0].heroImage[0].alt} title={contactData.contactEntries[0].title} />
            <motion.section className='py-8 px-6 xl:py-16' {...framerAnimations.slideRightFadeIn}>
                <div className="container flex flex-col lg:flex-row justify-between items-top lg:py-10">
                    <div className="lg:w-1/2 lg:pr-12">
                        <div className="w-full max-w-screen-md">
                            <p className="text-2xl xl:text-4xl mb-6 xl:mb-10">Let's Talk</p>
                            <p className="mb-8 xl:text-lg xl:mb-12">Fill in the form below and we will contact you as soon as we can.</p>
                        </div>
                        <form className="flex flex-col space-y-3 xl:space-y-4 max-w-screen-md w-full text-xl" ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input className="bg-neutral-100 rounded h-8 xl:h-9 max-w-sm px-1" type="text" name="user_name" />
                            <label>Email</label>
                            <input className="bg-neutral-100 rounded h-8 xl:h-9 max-w-md" type="email" name="user_email" />
                            <label>Message</label>
                            <textarea className="bg-neutral-100 rounded h-32" name="message" />
                            <Button className="max-w-28 xl:mt-10 xl:text-base">Send</Button>
                        </form>
                    </div>
                    <div className="hidden lg:block mt-8 lg:border-l-2 lg:pl-12 lg:w-1/2 space-y-2">
                        <p className="mb-8 xl:text-xl 2xl:text-2xl xl:mb-16">You can also contact us directly through the following channels:</p>
                        <p className="text-xl">{contactData.globalSet.streetAddress}</p>
                        <p className="text-xl">{contactData.globalSet.email}</p>
                        <p className="text-xl">{contactData.globalSet.phoneNumber}</p>
                    </div>
                </div>
            </motion.section>
        </>
    );
};