import React from 'react';
import Action from './Action';

const actionList = [
  {
    title: 'Sign Up',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Create Profile',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Explore Talents',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Recruit Talents',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

function Actions() {
  return (
    <section className="my-10 md:my-44 flex flex-wrap md:flex justify-center items-center md:justify-between mx-10 md:mx-20 2xl:mx-36">
      {actionList.map((anAction, index) => (
        <Action key={index} title={anAction.title} description={anAction.description} />
      ))}
    </section>
  );
}

export default Actions;
