'use client';
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
const FILTER_CATEGORIES = ['Plan', 'User status', 'Verification status'] as const;
type FilterCategory = typeof FILTER_CATEGORIES[number];
const optionsMap: Record<FilterCategory, string[]> = {
  'Plan': ['All', 'Bronze', 'Silver', 'Platinum', 'No plan'],
  'User status': ['All', 'Active', 'Disabled'],
  'Verification status': ['All', 'Verified', 'Pending', 'Not submitted'],
};
export default function FilterCard({
  appliedFilters,
  setAppliedFilters
}: {
  appliedFilters: Record<FilterCategory, string[]>,
  setAppliedFilters: React.Dispatch<React.SetStateAction<Record<FilterCategory, string[]>>>
}) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterCategory>('Plan');
  const [tempFilters, setTempFilters] = useState(appliedFilters);
  const toggleOption = (category: FilterCategory, option: string) => {
    const current = tempFilters[category] || [];
    const updated = current.includes(option)
      ? current.filter((v) => v !== option)
      : [...current, option];
    setTempFilters({ ...tempFilters, [category]: updated });
  };
  const applyFilters = () => {
    setAppliedFilters(tempFilters);
    setOpen(false);
  };
  const resetFilters = () => {
    const reset: Record<FilterCategory, string[]> = {
      'Plan': ['All'],
      'User status': ['All'],
      'Verification status': ['All'],
    };
    setTempFilters(reset);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Filters</Button>
      </DialogTrigger>
      <DialogContent className="w-[600px] p-6 rounded-lg">
        <div className="flex h-full">
          {/* Sidebar Tabs */}
          <div className="w-1/3 border-r pr-4 space-y-4">
            <h3 className="font-semibold text-lg">Filters</h3>
            {FILTER_CATEGORIES.map((cat) => (
              <div
                key={cat}
                className={`cursor-pointer font-medium ${cat === activeTab ? 'text-black' : 'text-gray-500'}`}
                onClick={() => setActiveTab(cat)} >
                {cat}
              </div>
            ))}
          </div>
          {/* Options */}
          <div className="w-2/3 pl-6">
            {optionsMap[activeTab].map((option) => (
              <div key={option} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  checked={tempFilters[activeTab]?.includes(option)}
                  onCheckedChange={() => toggleOption(activeTab, option)}
                  id={`${activeTab}-${option}`}
                />
                <label htmlFor={`${activeTab}-${option}`} className="text-sm">{option}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-between pt-4 border-t mt-4">
          <Button variant="link" onClick={resetFilters}>Reset filter</Button>
          <div className="space-x-2">
            <Button variant="outline" onClick={() => setOpen(false)}>Discard</Button>
            <Button onClick={applyFilters}>Apply</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}