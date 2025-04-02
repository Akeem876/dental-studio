import React from "react";
import Hero from "../components/Hero"
import CompanyHistory from "../components/CompanyHistory"
import OurStaff from "../components/ourStaff"
import ServiceSection from "../components/ServiceSection"
import Testimonials from "../components/Testimonials"
import ContactCTA from "../components/ContactCTA"

const HomePage = () => {
    return(
        <main>
            <Hero />
            <CompanyHistory />
            <OurStaff />
            <ServiceSection />
            <Testimonials />
            <ContactCTA />
        </main>
    )
}
 
export default HomePage;