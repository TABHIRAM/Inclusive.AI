import { useState, useEffect } from 'react';

const TimePicker = () => {
  const [selectedTime, setSelectedTime]= useState(() => {
    // Initialize eventName from localStorage if exists, otherwise empty string
    return localStorage.getItem('selectedTime');
});
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    // Function to fetch timezone
    const fetchTimezone = () => {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimezone(userTimezone);
      localStorage.setItem('TimeZone', userTimezone);
    };
   
  // localStorage.setItem('Time', selectedTime);
    // Call the function once on component mount
    fetchTimezone();
  }, []);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
    localStorage.setItem('Time', event.target.value);
  };

  return (
    <div>
      <label htmlFor="appt-time">Select Time:</label>
      <input
        id="appt-time"
        type="time"
        name="appt-time"
        // value={selectedTime}
        onChange={handleTimeChange}
      />
      <span className="text-sm"></span>
      {/* <span className="text-sm">Selected Time: {selectedTime} <code>{timezone}</code></span> */}
      <p className="text-sm font-semibold">Selected Time: {selectedTime} <code>{timezone}</code></p>
    </div>
  );
};

export default TimePicker;
