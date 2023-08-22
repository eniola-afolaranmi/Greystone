import styles from "../../styles/faq.css"
import style2 from "../../../styles/whatcodeninja.css"
import React from 'react';
import { Feature } from '../../components';

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

export default function Card({ name, sensei, date, note }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Home{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            What's Impact?{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            I'm a Sensei{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn more{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
      
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

    <div className='cn__whatcn section__margin' id='wImpact'>
      <div className='cn__whatcn-feature'>
        <Feature title="What is Impact?" text="Introducing IMPACT, our new education platform designed to teach coding and computer science skills to children in a fun and interactive way. We use powerful learning algorithms to assess each child's needs and create a unique learning path tailored to their interests. We've partnered with Microsoft MakeCode to provide top-quality resources to students, empowering them with the skills they need to succeed in the digital age. Our goal is to help the next generation of young coders and provide them with the skills necessary to thrive."/>
      </div>
      <div className='cn__whatcn-heading'>
        <h1 className='gradient__text'>
          Welcome to Impact
        </h1>
        <p> Learn More</p>
      </div>
      <div className='cn__whatcn-container'>
        <Feature title="Levels" text="Each belt is now made up of various levels. Ninjas will level up"/>
        <Feature title="Refresh" text="As Impact is a completely new curriculum, all ninjas in Orange Belt and under are restarting with the new curriculum"/>
        <Feature title="Prove Yourself" text="If there is knowledge in place beforehand, ninjas can prove themselves and skip through activities in levels"/>
      </div>
    </div>
    </main >
  )
}
