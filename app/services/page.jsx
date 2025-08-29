


"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";
import { easeIn, motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Experienced in developing robust, scalable web applications using Next.js, leveraging server-side rendering and static site generation. Proficient in React, JavaScript, and Tailwind CSS for building interactive user interfaces, and Node.js for backend services. Skilled in API integration, authentication, and state management, ensuring optimal performance. Competent in deploying applications on platforms like Vercel and AWS for high availability and scalability.',
    href: ''
  },
  {
    num: '02',
    title: 'Data Visualization',
    description: 'Expert in transforming data into compelling visual narratives using tools like Tableau, Power BI, and Python libraries such as Matplotlib and Seaborn. Skilled in creating interactive dashboards and visual reports that highlight key insights, trends, and patterns. Proficient in data analysis techniques to support informed decision-making, storytelling with data, and effectively communicating complex information to diverse audiences.',
    href: ''
  },
  {
    num: '03',
    title: 'Machine Learning',
    description: 'Proficient in developing and deploying machine learning models using Python libraries such as scikit-learn, TensorFlow, and Keras. Experienced in both supervised and unsupervised learning techniques, including classification, regression, and clustering. Skilled in feature engineering, model evaluation, and hyperparameter tuning to optimize performance. Capable of transforming data into predictive insights for strategic decision-making.',
    href: ''
  },
  {
    num: '04',
    title: 'Database Management',
    description: 'Skilled in designing, implementing, and maintaining databases to ensure integrity, security, and performance. Proficient in SQL and NoSQL databases, including MySQL, PostgreSQL, and MongoDB. Experienced in writing complex queries, optimizing database performance, and ensuring data backup and recovery. Capable of managing database environments to support scalability, high availability, and efficient data retrieval.',
    href: ''
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-6 mb-6" >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-center gap-6 group bg-gray-900 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-black text-3xl" />
                </Link>
              </div>
              <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
