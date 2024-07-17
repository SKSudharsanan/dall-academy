import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaEthereum, FaRust, FaCode, FaReact, FaLaptopCode, FaHandshake, FaUtensils, FaHackathon } from 'react-icons/fa';

const IconBox = ({ icon: Icon, text }) => (
  <div className="flex items-center p-4 border border-white rounded-md shadow-md bg-white bg-opacity-10">
    <Icon className="text-white text-3xl mr-4" />
    <p className="text-white text-lg">{text}</p>
  </div>
);

const Web3Bootcamps = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 pb-24 pt-12 md:grid-cols-12 text-center">
    <h2 className="col-span-1 text-3xl text-white font-bold md:col-span-12 content-center">
     Web 3 Bootcamps are expert-led Blockchain Mastery Courses in Online/Offline Modes. 
    </h2>
    <div className="col-span- md:col-span-12">
      <p className="mb-4 text-xl text-white md:text-2xl">
        We provide quality courses on the following
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <IconBox icon={FaEthereum} text="Solidity Mastery Bootcamp" />
        <IconBox icon={FaRust} text="Rust Mastery Bootcamp" />
        <IconBox icon={FaCode} text="Move Mastery Bootcamp" />
        <IconBox icon={FaReact} text="Frontend for Web3 Mastery Bootcamp" />
      </div>
      <p className="mb-8 text-xl text-white md:text-2xl">
        We do chain-specific dev bootcamps and hackathons on request
      </p>
      
    </div>
  </div>
);

const Web3Cohorts = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-center">
    <h2 className="col-span-1 text-3xl text-white font-bold md:col-span-12">
     Web 3 Cohorts are space for like-minded individuals to join and learn. 
    </h2>
    <div className="col-span-1 md:col-span-12">
      <p className="mb-4 text-xl text-white md:text-2xl">
        Learning is Fun, Learning in groups is even more fun. We are currently running Solidity and Rust cohorts for like-minded individuals to join and learn.
      </p>
      <p className="mb-8 text-xl text-white md:text-2xl">
        First Solidity Cohort runs from July 15-20
      </p>
      
    </div>
  </div>
);

const Web3Events = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-center">
    <h2 className="col-span-1 text-3xl text-white font-bold md:col-span-12">
      We help to organise web3 events on demand. 
    </h2>
    <div className="col-span-1 md:col-span-12">
      <p className="mb-4 text-xl text-white md:text-2xl">
        These are some of the events we can help you organise
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <IconBox icon={FaLaptopCode} text="IRL" />
        <IconBox icon={FaHandshake} text="Meetups" />
        <IconBox icon={FaUtensils} text="Dine and Code" />
        <IconBox icon={FaCode} text="Hackathons" />
      </div>
      <p className="mb-8 text-xl text-white md:text-2xl">
        We also cowork with blockchain communities across India to bring out the best web3 events.
      </p>
     
    </div>
  </div>
);

export { Web3Bootcamps, Web3Cohorts, Web3Events };
