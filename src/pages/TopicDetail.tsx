
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Define TypeScript interfaces for our data structure
interface SubTopic {
  title: string;
  content: string;
  providers: string[];
  accessibility: string;
  cost: string;
}

interface Province {
  name: string;
  [key: string]: SubTopic | string;
}

interface Topic {
  title: string;
  description: string;
  provinces: {
    [key: string]: Province;
  };
}

interface TopicsData {
  [key: string]: Topic;
}

const topicsData: TopicsData = {
  'sexual-health': {
    title: 'Sexual Health Services',
    description: 'Access to contraception, STI testing, and related services',
    provinces: {
      on: {
        name: 'Ontario',
        contraception: {
          title: 'Birth Control & Contraception',
          content: 'In Ontario, contraception is available through various healthcare providers including family doctors, nurse practitioners, and at sexual health clinics. Some methods require a prescription while others are available over-the-counter.',
          providers: ['Family Doctors', 'Nurse Practitioners', 'Pharmacists (emergency contraception)', 'Sexual Health Clinics'],
          accessibility: 'Most contraceptive methods require a prescription, which can be a barrier for those without a primary care provider. Emergency contraception is available without a prescription at pharmacies.',
          cost: 'Not covered by provincial health insurance for most people, though some workplace benefits plans may cover prescription contraceptives. The Ontario Drug Benefit program covers contraception for eligible individuals under 25, those on social assistance, and seniors.'
        },
        sti: {
          title: 'STI Testing & Treatment',
          content: 'Ontario provides STI testing through various healthcare providers and clinics. Many sexual health clinics offer anonymous testing options.',
          providers: ['Family Doctors', 'Nurse Practitioners', 'Sexual Health Clinics', 'Some Community Health Centers'],
          accessibility: 'Testing is widely available in urban areas but may be limited in rural regions. Some clinics offer evening and weekend hours to improve access.',
          cost: 'STI testing is covered by OHIP. Treatment for most STIs is covered, but some medications may require payment if the patient doesn\'t have drug coverage.'
        },
        education: {
          title: 'Sexual Health Education',
          content: 'Ontario has a comprehensive sexual health education curriculum, though implementation varies by school board and individual teachers.',
          providers: ['Public Schools', 'Sexual Health Clinics', 'Community Organizations'],
          accessibility: 'Quality and content of education varies significantly based on location, school, and teacher.',
          cost: 'Free in public schools. Some community programs may charge fees for specialized workshops.'
        }
      },
      bc: {
        name: 'British Columbia',
        contraception: {
          title: 'Birth Control & Contraception',
          content: 'British Columbia has recently implemented free contraception for all BC residents with a valid health card. This includes prescription contraceptives such as hormonal pills, IUDs, implants, and injectables.',
          providers: ['Family Doctors', 'Nurse Practitioners', 'Options for Sexual Health Clinics', 'Pharmacists (can prescribe some contraceptives)'],
          accessibility: 'BC is a leader in contraceptive access. Pharmacists can prescribe contraception directly, eliminating the need for a doctor\'s visit first.',
          cost: 'Free for BC residents with MSP coverage. This was implemented in 2023 as the first province-wide free contraception program in Canada.'
        },
        sti: {
          title: 'STI Testing & Treatment',
          content: 'BC offers comprehensive STI testing services with options for anonymous testing through various providers.',
          providers: ['Family Doctors', 'Nurse Practitioners', 'Options for Sexual Health Clinics', 'Online testing through GetCheckedOnline'],
          accessibility: 'BC has innovative access options including mail-in testing kits for remote areas and an online testing service.',
          cost: 'Testing and treatment are covered by MSP. Self-testing kits may have costs, though subsidized options exist.'
        },
        education: {
          title: 'Sexual Health Education',
          content: 'BC has a comprehensive sexual health curriculum with specific learning standards at each grade level.',
          providers: ['Public Schools', 'Options for Sexual Health', 'Community Organizations'],
          accessibility: 'Generally consistent implementation throughout the province, with resources available in multiple languages.',
          cost: 'Free in public schools. Community organizations may offer free or low-cost workshops.'
        }
      },
      qc: {
        name: 'Quebec',
        contraception: {
          title: 'Birth Control & Contraception',
          content: 'In Quebec, contraception services are available through CLSCs (local community service centers), hospitals, and private clinics.',
          providers: ['Family Doctors', 'Nurse Practitioners', 'CLSCs', 'Pharmacists (emergency contraception)'],
          accessibility: 'Access varies by region, with better availability in urban centers. Some rural areas have limited options.',
          cost: 'Quebec\'s public prescription drug insurance plan (RAMQ) covers contraception for those who are eligible. Others must use private insurance or pay out-of-pocket.'
        },
        sti: {
          title: 'STI Testing & Treatment',
          content: 'Quebec offers STI testing through various healthcare providers, with specialized sexual health centers in major urban areas.',
          providers: ['Family Doctors', 'CLSCs', 'Specialized Sexual Health Centers'],
          accessibility: 'Services are concentrated in urban areas. Some regions have limited access to specialized sexual health services.',
          cost: 'Testing is covered by RAMQ. Treatment costs depend on drug coverage status.'
        },
        education: {
          title: 'Sexual Health Education',
          content: 'Quebec has reintroduced mandatory sexual education in schools after previously removing it from the curriculum.',
          providers: ['Public Schools', 'CLSCs', 'Community Organizations'],
          accessibility: 'Implementation quality varies significantly across the province.',
          cost: 'Free in public schools. Some community organizations offer free workshops.'
        }
      }
    }
  },
  'maternal-health': {
    title: 'Maternal Health',
    description: 'Prenatal, birthing, and postnatal care options',
    provinces: {
      on: {
        name: 'Ontario',
        prenatal: {
          title: 'Prenatal Care',
          content: 'In Ontario, prenatal care is typically provided by family doctors, obstetricians, or midwives. Care usually begins in the first trimester and continues throughout pregnancy with regular check-ups.',
          providers: ['Family Doctors', 'Obstetricians', 'Midwives', 'Nurse Practitioners'],
          accessibility: 'Access varies by region. Many communities have shortages of maternity care providers, particularly midwives who often have waitlists.',
          cost: 'Prenatal medical care is covered by OHIP. Additional services like prenatal classes may have fees unless offered through public health units.'
        },
        birthing: {
          title: 'Birthing Options',
          content: 'Ontario residents can choose to give birth in hospitals, birth centers (limited locations), or at home with appropriate support. Midwives can attend births in all three settings.',
          providers: ['Obstetricians (hospital only)', 'Family Doctors (hospital only)', 'Midwives (all settings)'],
          accessibility: 'Hospital births are the most widely available option. Birth centers exist only in select communities. Home births require midwifery care, which has waitlists.',
          cost: 'Birth services are covered by OHIP regardless of setting. Additional comfort measures or private rooms may incur extra costs.'
        },
        postnatal: {
          title: 'Postpartum Care',
          content: 'Postpartum care in Ontario includes follow-up appointments, breastfeeding support, and mental health resources. Public health units offer programs for new parents.',
          providers: ['Family Doctors', 'Obstetricians', 'Midwives', 'Public Health Nurses'],
          accessibility: 'Midwifery care includes home visits for the first six weeks. Other providers typically require office visits, which can be challenging for new parents.',
          cost: 'Basic postpartum medical care is covered by OHIP. Additional services like lactation consultants may not be covered unless through public health programs.'
        }
      },
      bc: {
        name: 'British Columbia',
        prenatal: {
          title: 'Prenatal Care',
          content: 'British Columbia offers prenatal care through multiple provider types. The province has strong midwifery integration in the healthcare system.',
          providers: ['Family Doctors', 'Obstetricians', 'Midwives', 'Nurse Practitioners'],
          accessibility: 'BC has better midwifery access than many provinces but still faces shortages in rural areas.',
          cost: 'Prenatal medical care is covered by MSP. Some additional services may have fees.'
        },
        birthing: {
          title: 'Birthing Options',
          content: 'BC supports birth in various settings including hospitals, birth centers, and homes. Midwives have hospital privileges throughout the province.',
          providers: ['Obstetricians', 'Family Doctors', 'Midwives'],
          accessibility: 'Home birth and midwifery services are well-integrated into the provincial healthcare system.',
          cost: 'All birthing services are covered by MSP regardless of location or provider.'
        },
        postnatal: {
          title: 'Postpartum Care',
          content: 'BC provides comprehensive postpartum support including public health nurse home visits in many regions.',
          providers: ['Family Doctors', 'Midwives', 'Public Health Nurses'],
          accessibility: 'Postpartum support programs vary by region but are generally well-developed.',
          cost: 'Basic postpartum care is covered by MSP. Some specialized services may have additional costs.'
        }
      },
      qc: {
        name: 'Quebec',
        prenatal: {
          title: 'Prenatal Care',
          content: 'Quebec provides prenatal care through CLSCs and hospitals. The province has limited but growing midwifery services.',
          providers: ['Family Doctors', 'Obstetricians', 'Midwives (limited)', 'CLSC Nurses'],
          accessibility: 'Midwifery care is limited to specific regions with birth centers (maisons de naissance).',
          cost: 'Prenatal care is covered by RAMQ. Some additional services may require payment.'
        },
        birthing: {
          title: 'Birthing Options',
          content: 'Quebec birthing options include hospitals and birth centers where midwives practice. Home birth is available in limited regions where midwifery care exists.',
          providers: ['Obstetricians', 'Family Doctors', 'Midwives (in birth centers and limited home birth)'],
          accessibility: 'Birth centers exist in several regions but cannot meet demand. Midwifery services have lengthy waitlists.',
          cost: 'All birthing services are covered by RAMQ.'
        },
        postnatal: {
          title: 'Postpartum Care',
          content: 'Quebec offers postpartum support primarily through CLSCs, with home visits available in many regions.',
          providers: ['CLSC Nurses', 'Family Doctors', 'Midwives (for midwifery clients)'],
          accessibility: 'Services vary by region but generally include some form of postpartum support program.',
          cost: 'Basic postpartum care is covered by RAMQ.'
        }
      }
    }
  }
};

const TopicDetail = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const [selectedProvince, setSelectedProvince] = useState<string>('on');
  
  if (!topicId || !topicsData[topicId]) {
    return (
      <div className="container-custom my-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Topic Not Found</h1>
          <p className="mb-8">The topic you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/knowledge">Back to Knowledge Hub</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const topic = topicsData[topicId];
  const provinceData = topic.provinces[selectedProvince];
  // Filter out the 'name' property to get only the subtopic keys
  const subTopics = Object.keys(provinceData).filter(key => key !== 'name');

  return (
    <div className="container-custom my-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Button variant="outline" size="sm" asChild className="mb-2">
              <Link to="/knowledge" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Knowledge Hub
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">{topic.title}</h1>
            <p className="text-muted-foreground mt-1">{topic.description}</p>
          </div>
          
          <div className="w-full sm:w-64">
            <Label htmlFor="province-select">Select Province</Label>
            <Select 
              value={selectedProvince} 
              onValueChange={setSelectedProvince}
            >
              <SelectTrigger id="province-select" className="w-full mt-1">
                <SelectValue placeholder="Select a province" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(topic.provinces).map(([code, prov]) => (
                  <SelectItem key={code} value={code}>
                    {(prov as Province).name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {topic.title} in {provinceData.name}
            </CardTitle>
            <CardDescription>
              An overview of policies and access in {provinceData.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This page provides detailed information about {topic.title.toLowerCase()} 
              in {provinceData.name}, including provider types, accessibility, and costs.
            </p>
            
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Information PDF
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue={subTopics[0]} className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            {subTopics.map(subTopic => (
              <TabsTrigger key={subTopic} value={subTopic}>
                {(provinceData[subTopic] as SubTopic).title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {subTopics.map(subTopic => (
            <TabsContent key={subTopic} value={subTopic}>
              <Card>
                <CardHeader>
                  <CardTitle>{(provinceData[subTopic] as SubTopic).title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p>{(provinceData[subTopic] as SubTopic).content}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Service Providers</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {(provinceData[subTopic] as SubTopic).providers.map((provider, index) => (
                        <li key={index}>{provider}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Accessibility</h3>
                    <p>{(provinceData[subTopic] as SubTopic).accessibility}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Cost</h3>
                    <p>{(provinceData[subTopic] as SubTopic).cost}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TopicDetail;
