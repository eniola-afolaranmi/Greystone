import React from 'react';
import './faq.css';
import { Feature } from '../../components';
// TODO: come up with FAQ questions
const faqData = [
  {
    title: "Is my child a white belt again?",
    text: "No, your child will keep their current belt status! Due to Impact being a completely new curriculum altogether, Ninjas all over the globe are having to review the content in Impact, starting from White Belt"
  },
  {
    title: "Why'd you switch?",
    text: "*ask during"
  },
  {
    title: "How long will it take my child to get back to their belt?",
    text: "*ask during"
  },
  {
    title: "*Ask during meeting",
    text: "*ask during"
  },
]

const Features = () => {
  return (
    <div className='cn__faq section__padding' id='faq'>
      <div className='cn__faq-heading'>
        <h1>Switching to a new curriculum can be hard, </h1>
        <p>We're here to help!</p>
      </div>
      <div className='cn__faq-containers'>
        {faqData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Features