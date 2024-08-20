import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Hero from '@/components/Hero';
import Error from './Error';
import Loading from './Loading';

export const Contact = () => {
    const { contactData, error, loading } = useLoaderData();
    console.log(contactData);
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
            <section className='pt-8'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </section>
        </>
    );
};