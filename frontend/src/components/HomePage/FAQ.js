import React, { useState } from "react";

const FAQ = () => {
  // State to keep track of which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close answers
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Questions and answers data
  const faqs = [
    {
      question: "How many days should I spend in Bhutan to explore its highlights?",
      answer: "It is recommended to spend at least 7-10 days in Bhutan to explore the main highlights, including Paro, Thimphu, Punakha, and more.",
    },
    {
      question: "What should I pack for a trip to Bhutan?",
      answer: "Pack layered clothing, comfortable shoes, a good jacket, sunscreen, sunglasses, and any necessary medications. Bhutan's weather can vary, so be prepared for both cool and warm conditions.",
    },
    {
      question: "Are there any cultural norms I should be aware of when visiting Bhutan?",
      answer: "Yes, always show respect when visiting religious sites. Dress modestly, remove your shoes before entering temples, and avoid taking photos in prohibited areas.",
    },
    {
      question: "What is the currency used in Bhutan?",
      answer: "The currency used in Bhutan is the Bhutanese Ngultrum (BTN). Indian Rupees (INR) are also widely accepted in the country.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Upper Section: FAQ Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">FAQ</h2>
          <p className="text-lg text-gray-600">Have Any Doubts?</p>
        </div>

        {/* FAQ Questions and Answers */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <button
                  onClick={() => toggleAnswer(index)}
                  className="text-xl font-bold transform transition-transform"
                  style={{
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                 v
                  {/* &#x25BC;  */}
                </button>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
