import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ExternalLink, Info } from 'lucide-react';

const professions = [
  { value: 'midwife', label: 'Midwife' },
  { value: 'nurse', label: 'Nurse Practitioner' },
  { value: 'pharmacist', label: 'Pharmacist' }
];

const provinces = [
  { value: 'on', label: 'Ontario' },
  { value: 'bc', label: 'British Columbia' },
  { value: 'ab', label: 'Alberta' },
  { value: 'qc', label: 'Quebec' },
  { value: 'ns', label: 'Nova Scotia' },
  { value: 'mb', label: 'Manitoba' },
  { value: 'sk', label: 'Saskatchewan' },
  { value: 'nb', label: 'New Brunswick' },
  { value: 'nl', label: 'Newfoundland and Labrador' },
  { value: 'pe', label: 'Prince Edward Island' },
  { value: 'yt', label: 'Yukon' },
  { value: 'nt', label: 'Northwest Territories' },
  { value: 'nu', label: 'Nunavut' }
];

// Mock policy data for demo
const policyData = {
  midwife: {
    on: {
      canPrescribe: true,
      canPerformUltrasounds: true,
      canOrderBloodTests: true,
      independentPractice: true,
      source: 'https://www.cmo.on.ca/'
    },
    bc: {
      canPrescribe: true,
      canPerformUltrasounds: false,
      canOrderBloodTests: true,
      independentPractice: true,
      source: 'https://www.cmbc.bc.ca/'
    }
    // other provinces...
  },
  // other professions...
};

const Compare = () => {
  const [selectedProfession, setSelectedProfession] = useState('midwife');
  const [province1, setProvince1] = useState('on');
  const [province2, setProvince2] = useState('bc');
  const [comparing, setComparing] = useState(false);

  const handleCompare = () => {
    setComparing(true);
  };

  return (
    <div className="container-custom my-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Compare Healthcare Policies</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Comparison Options</CardTitle>
            <CardDescription>
              Choose a healthcare profession and two provinces to compare their policies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Healthcare Profession</label>
                <Select 
                  value={selectedProfession} 
                  onValueChange={setSelectedProfession}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select profession" />
                  </SelectTrigger>
                  <SelectContent>
                    {professions.map(profession => (
                      <SelectItem key={profession.value} value={profession.value}>
                        {profession.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Province 1</label>
                  <Select value={province1} onValueChange={setProvince1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select province" />
                    </SelectTrigger>
                    <SelectContent>
                      {provinces.map(province => (
                        <SelectItem key={province.value} value={province.value}>
                          {province.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Province 2</label>
                  <Select value={province2} onValueChange={setProvince2}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select province" />
                    </SelectTrigger>
                    <SelectContent>
                      {provinces.map(province => (
                        <SelectItem key={province.value} value={province.value}>
                          {province.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full" onClick={handleCompare}>
                Compare Policies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {comparing && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold">
              Comparison: {professions.find(p => p.value === selectedProfession)?.label} Policies
            </h2>
            
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="permissions">Permissions</TabsTrigger>
                <TabsTrigger value="sources">Sources & Details</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-4">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="bg-muted">
                      <CardTitle>{provinces.find(p => p.value === province1)?.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Can Prescribe Medications</h4>
                          <p className="flex items-center mt-1">
                            {policyData.midwife[province1]?.canPrescribe ? 
                              <span className="text-green-600 font-medium">Yes</span> : 
                              <span className="text-red-600 font-medium">No</span>}
                            <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Can Perform Ultrasounds</h4>
                          <p className="flex items-center mt-1">
                            {policyData.midwife[province1]?.canPerformUltrasounds ? 
                              <span className="text-green-600 font-medium">Yes</span> : 
                              <span className="text-red-600 font-medium">No</span>}
                            <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Can Order Blood Tests</h4>
                          <p className="flex items-center mt-1">
                            {policyData.midwife[province1]?.canOrderBloodTests ? 
                              <span className="text-green-600 font-medium">Yes</span> : 
                              <span className="text-red-600 font-medium">No</span>}
                            <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Independent Practice</h4>
                          <p className="flex items-center mt-1">
                            {policyData.midwife[province1]?.independentPractice ? 
                              <span className="text-green-600 font-medium">Yes</span> : 
                              <span className="text-red-600 font-medium">No</span>}
                            <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="bg-muted">
                      <CardTitle>{provinces.find(p => p.value === province2)?.label}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Can Prescribe Medications</h4>
                          <p className="flex items-center mt-1">
                            {policyData.midwife[province2]?.canPrescribe ? 
                              <span className="text-green-600 font-medium">Yes</span> : 
                              <span className="text-red-600 font-medium">No</span>}
                            <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Can Perform Ultrasounds</h4>
                          <p className="flex items-center mt-1">
                            {policyData.midwife[province2]?.canPerformUltrasounds ? 
                              <span className="text-green-600 font-medium">Yes</span> : 
                              <span className="text-red-600 font-medium">No</span>}
                            <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Can Order Blood Tests</h4>
                          <p className="flex items-center mt-1">
                            {policyData.midwife[province2]?.canOrderBloodTests ? 
                              <span className="text-green-600 font-medium">Yes</span> : 
                              <span className="text-red-600 font-medium">No</span>}
                            <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Independent Practice</h4>
                          <p className="flex items-center mt-1">
                            {policyData.midwife[province2]?.independentPractice ? 
                              <span className="text-green-600 font-medium">Yes</span> : 
                              <span className="text-red-600 font-medium">No</span>}
                            <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="permissions" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Permissions Comparison</CardTitle>
                    <CardDescription>
                      A detailed breakdown of what {professions.find(p => p.value === selectedProfession)?.label}s 
                      can and cannot do in each province
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 pl-2">Permission</th>
                            <th className="text-center py-3">{provinces.find(p => p.value === province1)?.label}</th>
                            <th className="text-center py-3">{provinces.find(p => p.value === province2)?.label}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-3 pl-2">Prescribe medications</td>
                            <td className="text-center py-3">
                              {policyData.midwife[province1]?.canPrescribe ? 
                                <span className="text-green-600 font-medium">Yes</span> : 
                                <span className="text-red-600 font-medium">No</span>}
                            </td>
                            <td className="text-center py-3">
                              {policyData.midwife[province2]?.canPrescribe ? 
                                <span className="text-green-600 font-medium">Yes</span> : 
                                <span className="text-red-600 font-medium">No</span>}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 pl-2">Perform ultrasounds</td>
                            <td className="text-center py-3">
                              {policyData.midwife[province1]?.canPerformUltrasounds ? 
                                <span className="text-green-600 font-medium">Yes</span> : 
                                <span className="text-red-600 font-medium">No</span>}
                            </td>
                            <td className="text-center py-3">
                              {policyData.midwife[province2]?.canPerformUltrasounds ? 
                                <span className="text-green-600 font-medium">Yes</span> : 
                                <span className="text-red-600 font-medium">No</span>}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 pl-2">Order blood tests</td>
                            <td className="text-center py-3">
                              {policyData.midwife[province1]?.canOrderBloodTests ? 
                                <span className="text-green-600 font-medium">Yes</span> : 
                                <span className="text-red-600 font-medium">No</span>}
                            </td>
                            <td className="text-center py-3">
                              {policyData.midwife[province2]?.canOrderBloodTests ? 
                                <span className="text-green-600 font-medium">Yes</span> : 
                                <span className="text-red-600 font-medium">No</span>}
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 pl-2">Independent practice</td>
                            <td className="text-center py-3">
                              {policyData.midwife[province1]?.independentPractice ? 
                                <span className="text-green-600 font-medium">Yes</span> : 
                                <span className="text-red-600 font-medium">No</span>}
                            </td>
                            <td className="text-center py-3">
                              {policyData.midwife[province2]?.independentPractice ? 
                                <span className="text-green-600 font-medium">Yes</span> : 
                                <span className="text-red-600 font-medium">No</span>}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sources" className="mt-4">
                <div className="grid grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{provinces.find(p => p.value === province1)?.label} Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Governing Body</h4>
                          <a 
                            href={policyData.midwife[province1]?.source} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-maple hover:text-maple-dark flex items-center mt-1"
                          >
                            {province1 === 'on' ? 'College of Midwives of Ontario' : 'College of Midwives of British Columbia'}
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Key Legislation</h4>
                          <a 
                            href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-maple hover:text-maple-dark flex items-center mt-1"
                          >
                            {province1 === 'on' ? 'Midwifery Act, 1991' : 'Health Professions Act, R.S.B.C. 1996'}
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Practice Standards</h4>
                          <a 
                            href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-maple hover:text-maple-dark flex items-center mt-1"
                          >
                            Professional Standards for Midwives
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>{provinces.find(p => p.value === province2)?.label} Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Governing Body</h4>
                          <a 
                            href={policyData.midwife[province2]?.source} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-maple hover:text-maple-dark flex items-center mt-1"
                          >
                            {province2 === 'on' ? 'College of Midwives of Ontario' : 'College of Midwives of British Columbia'}
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Key Legislation</h4>
                          <a 
                            href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-maple hover:text-maple-dark flex items-center mt-1"
                          >
                            {province2 === 'on' ? 'Midwifery Act, 1991' : 'Health Professions Act, R.S.B.C. 1996'}
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Practice Standards</h4>
                          <a 
                            href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-maple hover:text-maple-dark flex items-center mt-1"
                          >
                            Professional Standards for Midwives
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end">
              <Button variant="outline">
                Download Comparison Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
