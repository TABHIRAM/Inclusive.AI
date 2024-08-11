"use client";
import { useRef, useEffect, useState } from "react";
import { Step, Stepper, useStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import { EventType } from "./event-type";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import GuestSlider from "./guest-slider";
import { DatePickerWithRange } from "./date-selector";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TimePicker from "./time-selector";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { useRouter } from "next/navigation";

const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];

const StepperClickableSteps = () => {
  const { currentStep } = useStepper();
  const [eventName, setEventName] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("eventName") || "" : ""
  );
  const [Budget, setBudget] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("Budget") || "" : ""
  );

  const [isChecked, setChecked] = useState(true);
  const handleCheckedChange = (checked: boolean) => {
    setChecked(checked);
  };

  const [locationPreference, setlocationPreference] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("locationPreference") || ""
      : ""
  );

  const [specialLocation, setspecialLocation] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("specialLocation") || ""
      : ""
  );

  const [mobility, setmobility] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("mobility") || "" : ""
  );

  const [environment, setenvironment] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("environment") || ""
      : ""
  );

  const [budgetAllocation, setbudgetAllocation] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("budgetAllocation") || ""
      : ""
  );

  const [specificThemes, setspecificThemes] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("specificThemes") || ""
      : ""
  );

  const [dietaryRequirements, setdietaryRequirements] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("dietaryRequirements") || ""
      : ""
  );

  const [auspiciousTime, setauspiciousTime] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("auspiciousTime") || ""
      : ""
  );

  const [specificEntertainment, setspecificEntertainment] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("specificEntertainment") || ""
      : ""
  );

  const [isChecked1, setChecked1] = useState(false);
  const handleCheckedChange1 = (checked: boolean) => {
    setChecked(checked);
  };

  const [anythingElse, setanythingElse] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("anythingElse") || ""
      : ""
  );
  // Update localStorage whenever eventName changes
  useEffect(() => {
    localStorage.setItem("eventName", eventName);
    localStorage.setItem("Budget", Budget);
    localStorage.setItem("ecoFriendly", new Boolean(isChecked).toString());
    localStorage.setItem("LocationPreference", locationPreference);
    localStorage.setItem("specialLocation", specialLocation);
    localStorage.setItem("mobility", mobility);
    localStorage.setItem("environment", environment);
    localStorage.setItem("budgetAllocation", budgetAllocation);
    localStorage.setItem("specificThemes", specificThemes);
    localStorage.setItem("dietaryRequirements", dietaryRequirements);
    localStorage.setItem("auspiciousTime", auspiciousTime);
    localStorage.setItem("specificEntertainment", specificEntertainment);
    localStorage.setItem(
      "vegetarianSwitch",
      new Boolean(isChecked1).toString()
    );
    localStorage.setItem("anythingElse", anythingElse);
  }, [
    eventName,
    Budget,
    isChecked,
    locationPreference,
    specialLocation,
    mobility,
    environment,
    budgetAllocation,
    specificThemes,
    dietaryRequirements,
    auspiciousTime,
    specificEntertainment,
    isChecked1,
    anythingElse,
  ]);

  const stepContents = [
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-xl font-semibold mb-4">Event Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium m-2">Event Name</h3>
          {/* <Input type="text" id='EventName' placeholder="Enter Event Name"/> */}
          <Input
            type="text"
            id="EventName"
            placeholder="Enter Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Event Type</h3>
          <EventType />
          {/* Input field or component */}
          <p className="text-sm">
            Submit a request for a new{" "}
            <a
              href="https://sustainability.google/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Event Type</b>
            </a>{" "}
            here.
          </p>
        </div>
        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Guest Count</h3>
          {/* <Slider defaultValue={[33]} max={100} step={1} /> */}

          <GuestSlider />

          {/* Input field or component */}
        </div>
        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Planned Date(s)</h3>
          {/* Input field or component */}
          <DatePickerWithRange />
        </div>
        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Start Time</h3>
          <TimePicker />
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Label htmlFor="ecoFriendly">Eco-Friendly Event</Label>
            {/* <Switch id="EcoFriendly" /> */}
            <Switch
              id="ecoFriendly"
              checked={isChecked}
              onCheckedChange={setChecked}
            />
            {/* <Switch id="EcoFriendly" checked={isChecked} onChange={handleChange} /> */}
          </div>
          <Separator className="my-4" />
          <div className="flex items-center space-x-2">
            {/* <p className="text-sm">Toggle on, if it is an Eco-Friend</p> */}
            <p className="text-sm">
              Learn more at{" "}
              <a
                href="https://sustainability.google/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Google Sustainability</b>
              </a>
            </p>
          </div>
        </div>{" "}
        <h1 className="text-sm">
          Need assistance with creating an event? Visit our{" "}
          <a
            href="https://sustainability.google/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Guide</b> here.
          </a>
        </h1>
      </div>
    </div>,

    // </div>

    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-xl font-semibold mb-4">
        Budget & Location Preferences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {/* Example fields (replace with actual components) */}
        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium m-2">Budget</h3>
          {/* <Input type="text" placeholder="Please specify your budget." /> */}
          <Input
            type="text"
            id="Budget"
            placeholder="Please specify your budget."
            value={Budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <span>For example: 10,000,00 INR or $11,000</span>
          {/* <span>Specify your currency at start</span> */}

          {/* Input field or component */}
        </div>

        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Location Preference</h3>
          {/* <EventType/> */}
          <Input
            type="text"
            id="locationPreference"
            placeholder="Specify your desired event location."
            value={locationPreference}
            onChange={(e) => setlocationPreference(e.target.value)}
          />
          <span>For example: City, town, or village</span>

          {/* Input field or component */}
        </div>

        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">
            Any specific location preferences that is important to you?
          </h3>
          {/* <Slider defaultValue={[33]} max={100} step={1} /> */}

          {/* <GuestSlider/> */}
          {/* <h3>Is there anything else about the location that is important to you?</h3> */}
          <Input
            type="text"
            id="specialLocation"
            placeholder="Please specify any special location requirements."
            value={specialLocation}
            onChange={(e) => setspecialLocation(e.target.value)}
          />
          <span>For example: religious place</span>
        </div>

        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">
            Do you have any mobility considerations for your location?
          </h3>

          <Input
            type="text"
            id="mobility"
            placeholder="For example: close to public transportation, walkable area"
            value={mobility}
            onChange={(e) => setmobility(e.target.value)}
          />
        </div>

        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">
            Do you prefer an urban, suburban, or rural environment?
          </h3>

          <Input
            type="text"
            id="environment"
            placeholder="Provide your answer here"
            value={environment}
            onChange={(e) => setenvironment(e.target.value)}
          />
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">
            Are there specific areas of the event where more budget should be
            allocated?
          </h3>

          <Input
            type="text"
            id="budgetAllocation"
            placeholder="For example: venue, catering, entertainment"
            value={budgetAllocation}
            onChange={(e) => setbudgetAllocation(e.target.value)}
          />
        </div>
      </div>
    </div>,
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-xl font-semibold mb-4">
        Additional Details & Preferences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {/* Example fields (replace with actual components) */}
        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium m-2">
            Are there specific themes or atmospheres you envision for your
            event?
          </h3>
          <Input
            type="text"
            id="specificThemes"
            placeholder="For example: formal, casual, themed, or traditional setting?"
            value={specificThemes}
            onChange={(e) => setspecificThemes(e.target.value)}
          />

          {/* Input field or component */}
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium m-2">
            Do you have any specific dietary requirements or preferences for
            catering?
          </h3>
          <Input
            type="text"
            id="dietaryRequirements"
            placeholder="For example: any cuisines or dishes you would like to highlight?"
            value={dietaryRequirements}
            onChange={(e) => setdietaryRequirements(e.target.value)}
          />

          {/* Input field or component */}
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium m-2">
            Are there any specific entertainment or activities you would like to
            include?
          </h3>
          <Input
            type="text"
            id="specificEntertainment"
            placeholder="For example: live music, DJs, interactive games, or other forms of entertainment? 
"
            value={specificEntertainment}
            onChange={(e) => setspecificEntertainment(e.target.value)}
          />

          {/* Input field or component */}
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">
            Do you have a preferred timeline or schedule for your Main event?
          </h3>
          {/* Input field or component */}

          <Input
            type="text"
            id="auspiciousTime"
            placeholder="For example: Auspicious Time of the Day"
            value={auspiciousTime}
            onChange={(e) => setauspiciousTime(e.target.value)}
          />
        </div>

        {/* <div className="bg-gray-100 p-4 rounded-lg"> */}

        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <Label htmlFor="vegetarianSwitch">Non-Vegetarian</Label>
            <Switch
              id="vegetarianSwitch"
              checked={isChecked1}
              onCheckedChange={setChecked1}
            />

            {/* <Switch id="vegetarianSwitch" onChange={(e) => setVegetarian(e.target.checked)} /> */}
            <Label htmlFor="vegetarianSwitch">Vegetarian</Label>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center space-x-2">
            <p className="text-sm">
              Toggle on, if it is a Vegetarian or vice-versa
            </p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg">
          <h3 className="text-lg font-medium mb-2">
            Is there anything else you would like to share?&nbsp;&nbsp;&nbsp;
          </h3>
          <Textarea
            id="anythingElse"
            placeholder="Feel free to provide any additional information you have missed earlier so that Gemini can offer suggestions that are more realistic and tailored specifically to you."
            value={anythingElse}
            onChange={(e) => setanythingElse(e.target.value)}
          />
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper
        initialStep={0}
        steps={steps}
        onClickStep={(step, setStep) => {
          // alert(`Please utilize Step -${step + 1} in Desktop mode for an enhanced user experience. \nWe apologize for any inconvenience this may have caused.`);
          setStep(step);
        }}
      >
        {steps.map((stepProps, index) => (
          <Step
            key={stepProps.label}
            {...stepProps}
            className={index === currentStep ? "bg-secondary" : ""}
          >
            {/* Step content with improved styling */}
            <div className="h-full flex items-center justify-center my-2 border bg-secondary text-primary rounded-md p-4">
              {stepContents[index]}
            </div>
          </Step>
        ))}
        <Footer />
      </Stepper>
    </div>
  );
};

//   new code ends

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();
  // const [name, setName] = useState("a");

  //  New code for timer-redirect
  const router = useRouter();
  const [redirectAfterCompletion, setRedirectAfterCompletion] = useState(false);

  // Effect to handle redirection after 3 seconds
  useEffect(() => {
    if (hasCompletedAllSteps && !redirectAfterCompletion) {
      setRedirectAfterCompletion(true); // Start the redirect timer
    }
  }, [hasCompletedAllSteps, redirectAfterCompletion]);
  useEffect(() => {
    if (redirectAfterCompletion) {
      const timer = setTimeout(() => {
        router.push("/event-spotlight");
      }, 1200); // 3 seconds delay

      // Clean up the timer if component unmounts before the timer completes
      return () => clearTimeout(timer);
    }
  }, [redirectAfterCompletion, router]);


  return (
    <>
      {hasCompletedAllSteps && (
        <div className="h-40 flex flex-col items-center justify-center my-2 border bg-secondary text-primary rounded-md">
          <h1 className="text-xl mb-4">Woohoo! All steps completed! 🎉</h1>
          <div>
            <h1 className="text-sm">🪄 Creating a New Event...</h1>
            <h1 className="text-sm">🔮 Processing data with Gemini API...</h1>
            <h1 className="text-sm">➡️ Redirecting shortly...</h1>
          </div>
        </div>
      )}{" "}
      <h2 className="text-sm">
        This dashboard is intended for desktop use and may not be fully
        compatible with mobile devices.
      </h2>
      <div className="w-full flex justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? "Submit" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};
export default StepperClickableSteps;
