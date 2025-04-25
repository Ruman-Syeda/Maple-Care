
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Knowledge = () => {
  return (
    <div className="container-custom my-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Knowledge Hub</h1>
        <p className="text-muted-foreground mb-8">
          Explore accessible summaries and visual resources about healthcare policies across Canada.
        </p>
        
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search for policies, provinces, or healthcare topics..." 
              className="pl-10" 
            />
          </div>
        </div>
        
        <Tabs defaultValue="professions">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="professions">Professions</TabsTrigger>
            <TabsTrigger value="provinces">Provinces</TabsTrigger>
            <TabsTrigger value="topics">Topics</TabsTrigger>
            <TabsTrigger value="infographics">Infographics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="professions" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-maple/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-maple" />
                  </div>
                  <CardTitle>Midwifery</CardTitle>
                  <CardDescription>
                    Scope of practice, regulations, and legislation across provinces
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn about how midwives are regulated, what services they can provide, 
                    and how their scope of practice differs across provinces in Canada.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group w-full justify-start p-0 hover:bg-transparent">
                    <Link to="/profession/midwifery" className="flex items-center text-maple">
                      Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-maple/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-maple" />
                  </div>
                  <CardTitle>Nurse Practitioners</CardTitle>
                  <CardDescription>
                    Regulations, prescribing authority, and privileges by province
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore how nurse practitioners operate across Canada, including differences 
                    in prescribing authority and care privileges.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group w-full justify-start p-0 hover:bg-transparent">
                    <Link to="/profession/nurse-practitioners" className="flex items-center text-maple">
                      Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-maple/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-maple" />
                  </div>
                  <CardTitle>Pharmacists</CardTitle>
                  <CardDescription>
                    Services, prescribing rights, and province-specific regulations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understand what pharmacists can legally do in each province, from
                    prescribing medications to administering vaccines.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group w-full justify-start p-0 hover:bg-transparent">
                    <Link to="/profession/pharmacists" className="flex items-center text-maple">
                      Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-maple/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-maple" />
                  </div>
                  <CardTitle>Physicians</CardTitle>
                  <CardDescription>
                    Regulatory frameworks, licensing, and interprovincial differences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover how physicians are regulated across Canada and the differences
                    in practice guidelines between provinces.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group w-full justify-start p-0 hover:bg-transparent">
                    <Link to="/profession/physicians" className="flex items-center text-maple">
                      Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="provinces" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Ontario', 'British Columbia', 'Alberta', 'Quebec', 'Nova Scotia', 'Manitoba'].map((province) => (
                <Card key={province} className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">{province}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Healthcare policies and regulations specific to {province}.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="group w-full justify-start p-0 hover:bg-transparent">
                      <Link to={`/province/${province.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center text-maple text-sm">
                        View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="topics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Sexual Health Services</CardTitle>
                  <CardDescription>
                    Access to contraception, STI testing, and related services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn about sexual health services available across different provinces,
                    who can provide them, and barriers to access.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group w-full justify-start p-0 hover:bg-transparent">
                    <Link to="/topic/sexual-health" className="flex items-center text-maple">
                      Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Maternal Health</CardTitle>
                  <CardDescription>
                    Prenatal, birthing, and postnatal care options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore maternal health services, including care provider options,
                    birthing facilities, and support programs across Canada.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group w-full justify-start p-0 hover:bg-transparent">
                    <Link to="/topic/maternal-health" className="flex items-center text-maple">
                      Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="infographics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
              <CardHeader>
        <CardTitle>Midwifery Care Across Canada</CardTitle>
        <CardDescription>Visual comparison of midwifery services by province</CardDescription>
      </CardHeader>
      <CardContent>
        <img 
          src="https://canadianmidwives.org/sites/canadianmidwives.org/wp-content/uploads/2022/03/cdc-COV00lEV3fM-unsplash-930x620.jpg" 
          alt="Midwifery Care Infographic" 
          className="rounded-md object-cover w-full h-auto"
        />
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to="/infographic/midwifery-care">View Full Infographic</Link>
        </Button>
      </CardFooter>
              </Card>
              
              <Card>
              <CardHeader>
        <CardTitle>Sexual Healthcare Access Map</CardTitle>
        <CardDescription>Geographic visualization of service availability</CardDescription>
      </CardHeader>
      <CardContent>
        <img 
          src="https://th.bing.com/th/id/OIP.zl38hoIIyWmLXk1b0M4r4wHaHy?rs=1&pid=ImgDetMain" 
          alt="Sexual Health Access Map" 
          className="rounded-md object-cover w-full h-auto"
        />
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to="/infographic/sexual-healthcare-access">View Full Infographic</Link>
        </Button>
      </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Knowledge;
