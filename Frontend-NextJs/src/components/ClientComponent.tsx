// Handelling Veg-NonVed
'use client';

import { useEffect, useState } from 'react';

interface ClientComponentProps {
  storageKey: string;
}

const ClientComponent: React.FC<ClientComponentProps> = ({ storageKey }) => {
  const [output, setOutput] = useState<string | boolean | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(storageKey);

    if (data) {
      if (storageKey.toLowerCase().includes('date')) {
        // Handle date formatting
        try {
          const parsedData = JSON.parse(data);
          if (parsedData.from && parsedData.to) {
            const fromDate = new Date(parsedData.from);
            const toDate = new Date(parsedData.to);

            const options: Intl.DateTimeFormatOptions = {
              month: 'short',
              day: 'numeric',
            };

            const fromDateString = fromDate.toLocaleDateString('en-US', options);
            const toDateString = toDate.toLocaleDateString('en-US', options);

            setOutput(`${fromDateString} - ${toDateString}`);
          }
        } catch (error) {
          console.error('Error parsing or formatting date data:', error);
          setOutput('Invalid date format');
        }
      } else if (data.toLowerCase() === 'true' || data.toLowerCase() === 'false') {
        // Handle boolean values
        setOutput(data.toLowerCase() === 'true');
      } else {
        // Handle other data types (non-date)
        setOutput(data);
      }
    } else {
      setOutput('No data found');
    }
  }, [storageKey]);

  useEffect(() => {
    if (output) {
      fetch('/api/send-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [storageKey]: output }),
      });
    }
  }, [output]);

  if (output === null) {
    return <p>Loading...</p>;
  }

  if (typeof output === 'boolean') {
    return <p>{output ? 'VEG' : 'Non-Veg'}</p>;
  }

  return <p>{output}</p>;
};

export default ClientComponent;
