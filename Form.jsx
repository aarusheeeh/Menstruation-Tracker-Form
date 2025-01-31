import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const MenstruationTrackerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cycleLength: "",
    periodStartDate: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <Card className="w-full max-w-lg p-6">
        <h1 className="text-xl font-bold text-center mb-4">Menstruation Tracker</h1>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="cycleLength">Cycle Length (in days)</Label>
              <Input
                id="cycleLength"
                type="number"
                name="cycleLength"
                value={formData.cycleLength}
                onChange={handleChange}
                placeholder="e.g., 28"
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="periodStartDate">Last Period Start Date</Label>
              <Input
                id="periodStartDate"
                type="date"
                name="periodStartDate"
                value={formData.periodStartDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="symptoms">Symptoms (optional)</Label>
              <Input
                id="symptoms"
                type="text"
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                placeholder="e.g., cramps, headache"
              />
            </div>
            <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MenstruationTrackerForm;
