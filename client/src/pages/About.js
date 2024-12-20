import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce Website"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to our E-Commerce Platform, your ultimate destination 
            for a seamless online shopping experience. At our core, we are committed 
            to providing a diverse range of high-quality products, tailored to meet your
            needs and preferences. Whether you’re looking for the latest fashion trends, 
            innovative tech gadgets, or everyday essentials, we’ve got you covered. 
            Our user-friendly interface, advanced search capabilities, and secure payment 
            system ensure a smooth and hassle-free shopping journey. With a focus on customer 
            satisfaction, we bring you curated collections, exciting deals, and personalized 
            recommendations. Join us as we redefine online shopping with convenience, trust, and innovation at its heart.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
