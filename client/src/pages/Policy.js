import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We collect only the necessary personal information, 
             such as your name, email address, phone number, and 
             payment details, required to process your orders and 
             enhance your shopping experience.</p>
          <p>Your data is used solely for order processing, customer 
             support, personalized recommendations, and notifying you 
             about promotions or updates, with your consent.</p>
          <p>We implement robust encryption protocols and secure storage 
             systems to safeguard your personal information from unauthorized 
             access or breaches.</p>
          <p>We do not sell, trade, or share your personal data with third 
             parties, except for trusted service providers involved in payment 
             processing, shipping, or other operations essential to fulfilling your orders.</p>
          <p>Our website uses cookies to enhance functionality and provide a 
             personalized experience. You can manage cookie preferences through 
             your browser settings.</p>
          <p>You have the right to access, update, or delete your personal 
             information at any time. You can also opt-out of receiving marketing communications.</p>
          <p>We reserve the right to update our privacy policy as needed. Any changes will be 
             communicated promptly, ensuring you stay informed about how your data is handled.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
