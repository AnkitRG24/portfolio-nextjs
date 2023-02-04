import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Ankit | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Ankit Raj Gupta</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/ankit-raj-gupta-715258237/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/AnkitRG24'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
             Software Development <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        As a Master of Computer Applications student, I bring a strong foundation in computer programming and web development to the table. With a keen understanding of languages such as C, SQL, HTML, CSS and ReactJS, I am confident in my ability to contribute to any project that involves coding or web design. Throughout my academic journey, I have honed my skills in problem-solving and critical thinking, which I believe will be valuable assets in the field. I am eager to apply my knowledge and passion for technology to a challenging and dynamic work environmen
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills & Certificates</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>C
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Wordpress
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>MongoDB
            {/*<span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
  <span className='px-2'>|</span> RESTAPI */}
          </p>
          <p className='py-2'>
            <span className='font-bold'>Certificates</span>
            <span className='px-2'>|</span>SQL (Jan 2022 - Fab 2022)
            <span className='px-2'>|</span> Volunteer Of IT Quiz (April 2022 - May 2022)
            <span className='px-2'>|</span> Full Stack Web Development (Jan 2023 - Present)
           
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Eduction
        </h5>
        {/* PG */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Graphic Era University
            </span>
            <span className='px-2'>|</span>Dehradun, Uttrakhand
          </p>
          <p className='py-1 italic'>Master Of Computer Application (2021-Cureent)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          </ul>
        </div>


        {/* BCA */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Bachelor Of Computer Eduction
            </span>
            <span className='px-2'>|</span>Motihari,Bihar
          </p>
          <p className='py-1 italic'>Sri Narayan Singh College (2017 - 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
          </ul>
        </div>
        {/* 12th MHK */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Senior Secondary Level
            </span>
            <span className='px-2'>|</span>Motihari,Bihar
          </p>
          <p className='py-1 italic'>MHK College (2015 - 2017)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            
          </ul>
        </div>
        {/* 10th */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Secondary Level
            </span>
            <span className='px-2'>|</span>Motihari,Bihar
          </p>
          <p className='py-1 italic'>Jeewan Public School (2014 - 2015)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            
          </ul>
        </div>

        {/* Project */}
        <h5 className='text-center underline text-[18px] py-4'>
          Projects
        </h5>
      
        {/* Proj1 */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Ecommerce Website</span>
            <span className='px-2'></span>
          </p>
          <p className='py-1 italic'>(03/2022 – 04/2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              A web application developed using HTML,JavaScript,CSS,PHP
            </li>
            <li>
              Use To Buy Shoes
            </li>
            <li>
              Developed To Learn Frontend Web Development
            </li>
            
          </ul>
        </div>
         {/* Proj2 */}
         <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Email Validation</span>
            <span className='px-2'></span>
          </p>
          <p className='py-1 italic'>(05/2021 – 05/2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Using String Function (python)
            </li>
            <li>
            verifying if an email address is valid and deliverable.
            </li>
            <li>
              Developed To Learn String
            </li>
            
          </ul>
        </div>
         {/* Proj3 */}
         <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Virtual Assistant</span>
            <span className='px-2'></span>
          </p>
          <p className='py-1 italic'>(08/2022 – 09/2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              To Learn Python Modules
            </li>
            <li>
              Tells Us Weather, Play Music, Tells Time
            </li>
                        
          </ul>
        </div>
        {/* Proj4 */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Real Time Chat Web application</span>
            <span className='px-2'></span>
          </p>
          <p className='py-1 italic'>(11/2022 – 01/2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              A web chat app developed using HTML,CSS,NodeJS,Socket.io,nodemon,JavaScript
            </li>
            <li>
              Developed to learn NodeJS,nodemon,Socket.io
            </li>
                        
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
