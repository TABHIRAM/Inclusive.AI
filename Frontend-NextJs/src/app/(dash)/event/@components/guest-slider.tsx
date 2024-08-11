import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { any } from 'zod';

const GuestSlider = () => {

const [val, setVal] = useState(() => {
  // Initialize eventName from localStorage if exists, otherwise empty string
  return [localStorage.getItem('guestCount')] || [500];
});
 

useEffect(() => {
  localStorage.setItem('guestCount', val);
}, [val]);
// new code

  return (
    <>
    
<div className="container mx-auto px-4">
<div className="w-full">
<Slider defaultValue={val} min={2} max={1000} step={1} onValueChange={(val) => setVal(val)} />
</div>
<div className="mt-4">
<div className="flex justify-between">
<span className="text-sm">Estimated guest count?</span>
<span className="text-sm font-semibold">&nbsp;&nbsp;{val} Guests</span>
          
</div>
</div>
</div>

      
    </>
  );
};

export default GuestSlider;
