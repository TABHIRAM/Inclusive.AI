// New updated code to handle gemini response.
"use client";
import React, { useEffect, useState } from 'react';

// Define the type for events
interface TimelineItemProps {
  date: string;
  time: string;
  title: string;
  description: string;
  label: string;
}

// Define the type for the event data fetched from API
interface EventData {
  date: string;
  time: string;
  title: string;
  description: string;
  label: string;
}

// Define the type for the response from the API
interface EventResponse {
  EventTimeline: EventData[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  time,
  title,
  description,
  label,
}) => {
  return (
    <div className="relative pl-6 sm:pl-36 py-6 group text-left">
      {/* Purple label */}
      <div className="font-caveat font-medium text-l text-indigo-500 mb-1 sm:mb-0">{label}</div>
      {/* Vertical line, Date, Title, Circle marker */}
      <div className={`flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-2 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[8.0rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-10 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.0rem] after:-translate-x-1/2 after:translate-y-1.5`}
      >
        <time className="sm:absolute left-[-0.1rem] inline-flex items-center justify-center text-xs font-semibold uppercase w-auto h-auto px-4 py-2 mb-4 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full whitespace-nowrap">
          {date} {time}
        </time>

        <div className="text-l font-bold text-slate-900">{title}</div>
      </div>

      {/* Content */}
      <div className="text-slate-500">{description}</div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      // Collect form data
      const eventName = localStorage.getItem('eventName');
      const budget = localStorage.getItem('Budget');
      const ecoFriendly = localStorage.getItem('ecoFriendly');
      const locationPreference = localStorage.getItem('LocationPreference');
      const specialLocation = localStorage.getItem('specialLocation');
      const mobility = localStorage.getItem('mobility');
      const environment = localStorage.getItem('environment');
      const budgetAllocation = localStorage.getItem('budgetAllocation');
      const specificThemes = localStorage.getItem('specificThemes');
      const dietaryRequirements = localStorage.getItem('dietaryRequirements');
      const auspiciousTime = localStorage.getItem('auspiciousTime');
      const specificEntertainment = localStorage.getItem('specificEntertainment');
      const vegetarianSwitch = localStorage.getItem('vegetarianSwitch');
      const anythingElse = localStorage.getItem('anythingElse');

      // Log form data values
      console.log("From Timeline: eventName:", eventName);
      console.log("From Timeline: budget:", budget);
      console.log("From Timeline: ecoFriendly:", ecoFriendly);
      console.log("From Timeline: locationPreference:", locationPreference);
      console.log("From Timeline: specialLocation:", specialLocation);
      console.log("From Timeline: mobility:", mobility);
      console.log("From Timeline: environment:", environment);
      console.log("From Timeline: budgetAllocation:", budgetAllocation);
      console.log("From Timeline: specificThemes:", specificThemes);
      console.log("From Timeline: dietaryRequirements:", dietaryRequirements);
      console.log("From Timeline: auspiciousTime:", auspiciousTime);
      console.log("From Timeline: specificEntertainment:", specificEntertainment);
      console.log("From Timeline: vegetarianSwitch:", vegetarianSwitch);
      console.log("From Timeline: anythingElse:", anythingElse);

      // Prepare FormData
      const formData = new FormData();
      formData.append('eventName', eventName || '');
      formData.append('budget', budget || '');
      formData.append('ecoFriendly', ecoFriendly || '');
      formData.append('locationPreference', locationPreference || '');
      formData.append('specialLocation', specialLocation || '');
      formData.append('mobility', mobility || '');
      formData.append('environment', environment || '');
      formData.append('budgetAllocation', budgetAllocation || '');
      formData.append('specificThemes', specificThemes || '');
      formData.append('dietaryRequirements', dietaryRequirements || '');
      formData.append('auspiciousTime', auspiciousTime || '');
      formData.append('specificEntertainment', specificEntertainment || '');
      formData.append('vegetarianSwitch', vegetarianSwitch || '');
      formData.append('anythingElse', anythingElse || '');

      console.log("From Timeline: FormData content:");
      formData.forEach((value, key) => console.log(`From Timeline: ${key}: ${value}`));

      try {
        const response = await fetch('http://localhost:8080/process_timeline', {
          method: 'POST',
          body: formData, // FormData automatically sets the correct Content-Type
        });

        if (response.ok) {
          const data: EventResponse = await response.json();
          console.log("From Timeline: Fetched events data:", data);

          // Extract the EventTimeline array from the response
          if (Array.isArray(data.EventTimeline)) {
            setEvents(data.EventTimeline);
          } else {
            console.error("From Timeline: Data format is incorrect. Expected an array under 'EventTimeline'.");
            setError('Fetched data is not in the expected format.');
          }
        } else {
          console.error("From Timeline: Failed to fetch events. Status:", response.status);
          setError('Failed to fetch events.');
        }
      } catch (error) {
        console.error('From Timeline: An error occurred while fetching events:', error);
        setError('An error occurred while fetching event timeline.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative overflow-auto h-96 no-scrollbar"> {/* Make this container scrollable */}
      <div className="">
        {events.length > 0 ? (
          events.map((event, index) => (
            <TimelineItem
              key={index}
              date={event.date}
              time={event.time}
              title={event.title}
              description={event.description}
              label={event.label}
            />
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;
