import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

type FormData = {
  name: string
  age: string
  parentName: string
  contactInfo: string
  email: string
  phone: string
  lessonType: string
  lessonLength: string
  agreeToPolicy: boolean
}

export function SignUpForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    parentName: '',
    contactInfo: '',
    email: '',
    phone: '',
    lessonType: '',
    lessonLength: '',
    agreeToPolicy: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Form submitted successfully!')
        onClose()
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to submit form. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Sign Up for Lessons</h2>
      
      <div>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      
      <div>
        <Label htmlFor="age">Age</Label>
        <Input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
      </div>
      
      <div>
        <Label htmlFor="parentName">Parent Name (If Under 16)</Label>
        <Input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} />
      </div>
      
      <div>
        <Label htmlFor="contactInfo">Contact Info (Parent if Under 16)</Label>
        <Input type="text" id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />
      </div>
      
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      
      <div>
        <Label>Lesson Type</Label>
        <RadioGroup name="lessonType" value={formData.lessonType} onValueChange={(value) => setFormData(prev => ({ ...prev, lessonType: value }))}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="voice" id="voice" />
            <Label htmlFor="voice">Voice</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="piano" id="piano" />
            <Label htmlFor="piano">Piano</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="theory" id="theory" />
            <Label htmlFor="theory">Theory</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <Label>Lesson Length</Label>
        <RadioGroup name="lessonLength" value={formData.lessonLength} onValueChange={(value) => setFormData(prev => ({ ...prev, lessonLength: value }))}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="30" id="30min" />
            <Label htmlFor="30min">30 minutes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="45" id="45min" />
            <Label htmlFor="45min">45 minutes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="60" id="60min" />
            <Label htmlFor="60min">60 minutes</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="agreeToPolicy" name="agreeToPolicy" checked={formData.agreeToPolicy} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToPolicy: checked as boolean }))} />
        <Label htmlFor="agreeToPolicy">I agree to the payment policy</Label>
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}