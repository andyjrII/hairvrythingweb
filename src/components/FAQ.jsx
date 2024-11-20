import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      title:
        'What makes Hairvrything different from other hair care platforms?',
      content:
        'Hairvrything offers a unique blend of advanced technology and personalised care, ensuring that your hair receives the best treatment possible.',
    },
    {
      title: 'How does the hair scan work?',
      content:
        "Our hair scan uses state-of-the-art imaging to analyse your scalp and hair, providing insights into your hair's health and needs.",
    },
    {
      title: 'Can I use Hairvrything if I have a sensitive scalp?',
      content:
        'Absolutely. Our personalised recommendations are tailored to accommodate all hair types and scalp sensitivities.',
    },
    {
      title: 'Is the virtual showroom feature available on all mobile devices?',
      content:
        'Yes, you can access the virtual showroom on any mobile device with internet connectivity, making it easy to try new hairstyles on the go.',
    },
    {
      title: 'How often should I use the hair tracker?',
      content:
        "We recommend using the hair tracker at least once a month to monitor your hair's progress and adjust your care routine as needed.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faq'>
      <h6 className='text-center'>FAQ</h6>
      <h1 className='text-center'>Frequently Asked Questions</h1>
      <p className='text-center'>
        Need more clarity about Spowse? Here are a few questions we often get.
      </p>
      <div className='container'>
        <div className='accordion-container'>
          {faqData.map((faq, index) => (
            <div className='accordion-item' key={index}>
              <div
                className='accordion-header'
                onClick={() => toggleAccordion(index)}
              >
                <h3>{faq.title}</h3>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openIndex === index && (
                <div className='accordion-body'>
                  <p>{faq.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
