'use client'; // Ensure this is at the top to enable client-side rendering

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface BudgetItem {
  id: string;
  title: string;
  description: string;
  amount: string;
  avatar: string;
}

interface BudgetResponse {
  BudgetAllocation: BudgetItem[];
}

export default function BudgetAllocation() {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Retrieve all relevant data from local storage
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

      if (!budget || !eventName) {
        setError('No budget or event name found in local storage.');
        setLoading(false);
        return;
      }

      // Prepare FormData
      const formData = new FormData();
      formData.append('eventName', eventName);
      formData.append('budget', budget);
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

      try {
        const response = await fetch('http://localhost:8080/process_budget', {
          method: 'POST',
          body: formData, // FormData automatically sets the correct Content-Type
        });

        if (response.ok) {
          const data: BudgetResponse = await response.json();
          setBudgetItems(data.BudgetAllocation);
        } else {
          setError('Failed to process budget data.');
        }
      } catch (error) {
        setError('An error occurred while processing budget data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <Card x-chunk="dashboard-01-chunk-5">
        <CardHeader>
          <CardTitle>Budget Allocation</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <div>
              <p>Error: {error}</p>
            </div>
          ) : budgetItems && budgetItems.length > 0 ? (
            budgetItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarFallback>{item.avatar}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="ml-auto font-medium">{item.amount}</div>
              </div>
            ))
          ) : (
            <div>No budget data available</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
