import React from "react";
import Hero from "../components/Hero"
import CompanyHistory from "../components/CompanyHistory"
import DestinationSection from "../components/DestinationSection"
import ServiceSection from "../components/ServiceSection"
import Testimonials from "../components/Testimonials"
import ContactCTA from "../components/ContactCTA"

const HomePage = () => {
    return(
        <main>
            <Hero />
            <CompanyHistory />
            <DestinationSection />
            <ServiceSection />
            <Testimonials />
            <ContactCTA />
        </main>
    )
}
 
export default HomePage;