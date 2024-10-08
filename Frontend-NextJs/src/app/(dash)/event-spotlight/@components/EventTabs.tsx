// This code worked Fantastic. only Misc did not show up and gifts seems to be broken in between.
// Assuming it is related to text token limit by Google "max_output_tokens": 8192. 
//  Will try to split this and try to run it twice or will decrease the prompt size in python code.
"use client";
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Define TypeScript types for the tab content
interface TabContent {
  value: string;
  title: string;
  description: string;
  details: string;
}

// Define the maximum number of retries
const MAX_RETRIES = 3;

// Function to prepare FormData from localStorage
const prepareFormData = () => {
  const formData = new FormData();
  const keys = [
    'eventName', 'budget', 'ecoFriendly', 'LocationPreference', 'specialLocation',
    'mobility', 'environment', 'budgetAllocation', 'specificThemes', 'dietaryRequirements',
    'auspiciousTime', 'specificEntertainment', 'vegetarianSwitch', 'anythingElse'
  ];

  keys.forEach(key => {
    const value = localStorage.getItem(key);
    // console.log(key, "-Event-tab-", value)
    if (value) {
      formData.append(key, value);
    }
  });

  return formData;
};

// Function to fetch tab content data with retry logic
const fetchTabContentData = async (retryCount = 0): Promise<TabContent[]> => {
  try {
    const formData = prepareFormData();

    const response = await fetch('http://localhost:8080/process_tabs', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data: TabContent[] = await response.json();
    // Store data in localStorage
    localStorage.setItem('tabContentData', JSON.stringify(data));
    return data;
  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      console.warn(`Retrying fetch (${retryCount + 1}/${MAX_RETRIES})...`);
      return fetchTabContentData(retryCount + 1);
    } else {
      console.error('Failed to fetch data after retries:', error);
      throw error;
    }
  }
};

export function EventTabs() {
  const [tabContentData, setTabContentData] = useState<TabContent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTabContentData = async () => {
      try {
        // Check localStorage first
        const storedData = localStorage.getItem('tabContentData');
        if (storedData) {
          setTabContentData(JSON.parse(storedData));
        } else {
          const data = await fetchTabContentData();
          setTabContentData(data);
        }
      } catch (error) {
        setError('Failed to fetch tab content data.');
        console.error('Error loading tab content data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTabContentData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Tabs defaultValue="Venue" className="w-[1000px]">
      <TabsList className="grid w-full grid-cols-7">
        {tabContentData.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabContentData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="pb-28">
          <Card>
            <CardHeader>
              <CardTitle>{tab.title}</CardTitle>
              <CardDescription>{tab.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardDescription dangerouslySetInnerHTML={{ __html: tab.details }} />
            </CardContent>
            <CardFooter>
              <span className="text-xs">
                <b>Generated by Gemini.</b> Please double-check the information, as Gemini, being an LLM, might make mistakes. Use at your own discretion.
              </span>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
