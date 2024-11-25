import React, { FC } from 'react';

// Define the type for the component props
interface GreetingProps {
  name: string;
}

// Convert the component to TypeScript
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
