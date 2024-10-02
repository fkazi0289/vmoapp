import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

const VendorManagementForm = () => {
  const [date, setDate] = React.useState()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Form submitted successfully');
        // Reset form or redirect user
      } else {
        alert('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Vendor Management Input System</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {/* ... other form fields ... */}
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="company">Company Name</Label>
            <Select name="company">
              <SelectTrigger id="company">
                <SelectValue placeholder="Select a company" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="NewRez">NewRez</SelectItem>
                <SelectItem value="SLS">SLS</SelectItem>
                <SelectItem value="Genesis">Genesis</SelectItem>
                <SelectItem value="RITHM">RITHM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* ... other form fields ... */}
          <Button type="submit">Submit Request</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default VendorManagementForm;