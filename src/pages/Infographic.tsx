
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const infographicsData = {
  'sexual-healthcare-access': {
    title: 'Sexual Healthcare Access Map',
    description: 'Find accessible sexual health services near you',
    content: 'This tool allows you to quickly find the most accessible and nearby sexual health services by entering your postal code, city, province, or address.',
    instructions: 'Enter your location below to see a list of nearby sexual health services, including clinics, helplines, and health centers.'
  },
  'midwifery-care': {
    title: 'Midwifery Care Across Canada',
    description: 'Visual comparison of midwifery services by province',
    content: 'This infographic provides a comprehensive comparison of midwifery services available across all Canadian provinces and territories.',
    instructions: 'Explore the map to see midwifery regulation status, scope of practice, and integration within the healthcare system in each province.'
  }
};

const mockServiceResults = [
  {
    id: 1,
    name: 'Downtown Sexual Health Clinic',
    address: '123 Queen Street West, Toronto, ON M5V 2D3',
    phone: '416-555-1234',
    website: 'https://www.downtownshc.ca',
    services: ['STI Testing', 'Contraception Services', 'Sexual Health Counseling']
  },
  {
    id: 2,
    name: 'Community Health Center',
    address: '456 Dundas Street East, Toronto, ON M5A 2B5',
    phone: '416-555-5678',
    website: 'https://www.communityhealthcenter.org',
    services: ['STI Testing', 'LGBTQ+ Specialized Care', 'HIV Prevention']
  },
  {
    id: 3,
    name: 'University Health Services',
    address: '789 College Street, Toronto, ON M6G 1A7',
    phone: '416-555-9012',
    website: 'https://www.universityhealth.org',
    services: ['Contraception Services', 'Sexual Health Education', 'STI Testing']
  }
];

const Infographic = () => {
  const { infographicId } = useParams<{ infographicId: string }>();
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<typeof mockServiceResults | null>(null);
  
  if (!infographicId || !infographicsData[infographicId]) {
    return (
      <div className="container-custom my-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Infographic Not Found</h1>
          <p className="mb-8">The infographic you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/knowledge">Back to Knowledge Hub</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const infographic = infographicsData[infographicId];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would make an API call to get actual results
    // For now, we'll just show the mock data
    setSearchResults(mockServiceResults);
  };

  return (
    <div className="container-custom my-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild className="mb-2">
            <Link to="/knowledge" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Knowledge Hub
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{infographic.title}</h1>
          <p className="text-muted-foreground mt-1">{infographic.description}</p>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{infographic.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{infographic.content}</p>
            
            {infographicId === 'sexual-healthcare-access' && (
              <div className="mt-6">
                <p className="mb-4">{infographic.instructions}</p>
                
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-grow">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input 
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Enter postal code, city, or address..." 
                        className="pl-10" 
                      />
                    </div>
                    <Button type="submit" className="sm:w-auto">
                      <Search className="mr-2 h-4 w-4" />
                      Find Services
                    </Button>
                  </div>
                </form>
                
                {searchResults && (
                  <div className="mt-8">
                    <h3 className="text-xl font-medium mb-4">Nearby Services</h3>
                    <div className="space-y-4">
                      {searchResults.map((service) => (
                        <Card key={service.id}>
                          <CardContent className="p-4">
                            <h4 className="font-medium text-lg">{service.name}</h4>
                            <p className="text-muted-foreground text-sm">{service.address}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {service.services.map((s, i) => (
                                <span key={i} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                                  {s}
                                </span>
                              ))}
                            </div>
                            <div className="mt-3 flex justify-between items-center">
                              <div>
                                <p className="text-sm">Phone: {service.phone}</p>
                              </div>
                              <Button variant="outline" size="sm" asChild>
                                <a href={service.website} target="_blank" rel="noopener noreferrer">
                                  Visit Website
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {infographicId === 'midwifery-care' && (
              <div className="mt-6">
                <p className="mb-4">{infographic.instructions}</p>
                
                <div className="aspect-video bg-muted rounded-md p-4 flex items-center justify-center">
                  <p className="text-muted-foreground">Midwifery Care Across Canada Infographic</p>
                  <CardContent>
        <img 
          src="https://canadianmidwives.org/sites/canadianmidwives.org/wp-content/uploads/2025/02/CAM-Annual-Report-map-2023-province_totals_EN_V3-1024x520.png" 
          alt="Sexual Health Access Map" 
          className="rounded-md object-cover w-full h-auto"
        />
      </CardContent>
                </div>
                
                <div className="mt-4 flex justify-end">
                
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                  
                    Download Infographic
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Infographic;
