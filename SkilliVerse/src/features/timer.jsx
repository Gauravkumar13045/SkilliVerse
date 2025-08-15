import React, { useEffect, useState } from "react";

function Wisher() {
  const [hrs, setHrs] = useState('');

  useEffect(() => {

    const updateGreeting = () => {
      const now = new Date();
      const hours = now.getHours();
      let greeting = '';

      if (hours >= 5 && hours < 12) {
        greeting = 'morning';
      } else if (hours >= 12 && hours < 17) {
        greeting = 'afternoon';
      } else {
        greeting = 'evening';
      }
      setHrs(greeting); 
    };

    updateGreeting();


    const timerId = setInterval(updateGreeting, 60000);


    return () => clearInterval(timerId);
  }, []);

  return (
    <p className="text-gray-500 dark:text-gray-400 text-lg">
      Good {hrs},
    </p>
  );
}

export default Wisher;