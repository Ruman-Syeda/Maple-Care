
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Map, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container-custom text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-in">
            Empowering Healthcare Access Across Canada
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-in">
            Compare sexual healthcare policies, access accurate information, 
            and advocate for better care in your province.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="animate-slide-in">
              <Link to="/compare">Compare Policies</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-slide-in">
              <Link to="/map">Explore the Map</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How Maple Care Helps</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access the tools and information you need to understand, compare, and advocate
              for better healthcare policies across Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <div className="bg-maple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-maple" />
                </div>
                <CardTitle>Policy Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compare healthcare policies between provinces to see how services and 
                  regulations differ across Canada.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/compare" className="group text-maple font-medium flex items-center">
                  Compare now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="bg-maple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-maple" />
                </div>
                <CardTitle>Knowledge Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access clear, accessible summaries of healthcare policies with 
                  visual infographics.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/knowledge" className="group text-maple font-medium flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="bg-maple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-maple" />
                </div>
                <CardTitle>Advocacy Toolkit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find guides, templates, and resources to help advocate for 
                  better healthcare policies.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/advocacy" className="group text-maple font-medium flex items-center">
                  Get tools <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="bg-maple/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-maple" />
                </div>
                <CardTitle>Interactive Map</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore an interactive map of Canada showing key healthcare 
                  access indicators by province.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/map" className="group text-maple font-medium flex items-center">
                  View map <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-muted">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Action?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Join the community advocating for better healthcare policies across Canada. 
            Your voice matters in creating positive change.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/compare">Compare Policies</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/advocacy">Advocacy Tools</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
