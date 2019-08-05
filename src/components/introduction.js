import React from 'react';
import Button from './button';

const Introduction = () => {
  return (
    <section className="introduction">
      <h3>Gretchen Ward</h3>
      <p>Front End Developer</p>
      <Button className="scroll" text="See What I've Been Working On" />
    </section>
  )
}

export default Introduction;
