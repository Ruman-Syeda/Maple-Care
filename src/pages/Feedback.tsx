
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Feedback = () => {
  const { toast } = useToast();
  const [reasonValue, setReasonValue] = useState<string>('');
  const [customReason, setCustomReason] = useState<string>('');
  const [meetNeeds, setMeetNeeds] = useState<string>('');
  const [improvementText, setImprovementText] = useState<string>('');
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [feelingValue, setFeelingValue] = useState<string>('');
  const [stayConnectedValue, setStayConnectedValue] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, send this data to a backend service
    console.log({
      reason: reasonValue === 'other' ? customReason : reasonValue,
      meetNeeds,
      improvement: improvementText,
      feedback: feedbackText,
      feeling: feelingValue,
      stayConnected: stayConnectedValue,
      email: email || 'Not provided',
      pageUrl: window.location.href
    });
    
    toast({
      title: "Feedback Submitted",
      description: "Thanks for sharing with us. Your voice helps us support more people like you.",
    });
    
    // Reset the form
    setReasonValue('');
    setCustomReason('');
    setMeetNeeds('');
    setImprovementText('');
    setFeedbackText('');
    setFeelingValue('');
    setStayConnectedValue('');
    setEmail('');
  };

  return (
    <div className="container-custom my-12">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Help Us Help You</CardTitle>
            <CardDescription>It takes 30 seconds. Your feedback shapes this space.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>1️⃣ What brought you here today?</Label>
                <RadioGroup value={reasonValue} onValueChange={setReasonValue} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="info" id="info" />
                    <Label htmlFor="info">💡 I was looking for information</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="support" id="support" />
                    <Label htmlFor="support">❤️ I needed support or guidance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="service" id="service" />
                    <Label htmlFor="service">📍 I was searching for a nearby service</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exploring" id="exploring" />
                    <Label htmlFor="exploring">❓ Just exploring</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">✍️ Other</Label>
                  </div>
                  {reasonValue === 'other' && (
                    <Input 
                      placeholder="Please specify" 
                      value={customReason}
                      onChange={(e) => setCustomReason(e.target.value)}
                      className="mt-2"
                    />
                  )}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>2️⃣ Did this page meet your needs?</Label>
                <RadioGroup value={meetNeeds} onValueChange={setMeetNeeds} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">✅ Yes, it helped</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="kindof" id="kindof" />
                    <Label htmlFor="kindof">⚠️ Kind of — some info was missing or unclear</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">❌ No, I didn't get what I needed</Label>
                  </div>
                </RadioGroup>

                {(meetNeeds === 'kindof' || meetNeeds === 'no') && (
                  <div className="mt-3">
                    <Label htmlFor="improvement">→ What could've made it better for you?</Label>
                    <Textarea
                      id="improvement"
                      placeholder="Please share your suggestions..."
                      value={improvementText}
                      onChange={(e) => setImprovementText(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">3️⃣ What would make this site feel more helpful or welcoming to you?</Label>
                <Textarea
                  id="feedback"
                  placeholder="Give people space to suggest, vent, or dream a little..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>4️⃣ How do you feel after visiting this page?</Label>
                <RadioGroup value={feelingValue} onValueChange={setFeelingValue} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="informed" id="informed" />
                    <Label htmlFor="informed">😊 Informed and confident</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neutral" id="neutral" />
                    <Label htmlFor="neutral">😐 Neutral</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="confused" id="confused" />
                    <Label htmlFor="confused">😕 Confused</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="overwhelmed" id="overwhelmed" />
                    <Label htmlFor="overwhelmed">😟 Overwhelmed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="stilllooking" id="stilllooking" />
                    <Label htmlFor="stilllooking">😢 Still looking for help</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>5️⃣ Would you like to get involved or stay connected?</Label>
                <RadioGroup value={stayConnectedValue} onValueChange={setStayConnectedValue} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="updates" id="updates" />
                    <Label htmlFor="updates">I want to stay updated on resources</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="more-feedback" id="more-feedback" />
                    <Label htmlFor="more-feedback">I'm open to sharing more feedback</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no-connection" id="no-connection" />
                    <Label htmlFor="no-connection">Nope, just passing through today</Label>
                  </div>
                </RadioGroup>

                {(stayConnectedValue === 'updates' || stayConnectedValue === 'more-feedback') && (
                  <div className="mt-3">
                    <Label htmlFor="email">Your email (optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="youremail@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                )}
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">Send My Feedback</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
