import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Map = () => {
  const [activeProvince, setActiveProvince] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  // Mock data for provinces
  const provinceData = {
    on: {
      name: 'Ontario',
      midwives: 'Full scope of practice',
      nursesPractitioners: 'Extended prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 85,
      details: 'Ontario has well-established midwifery legislation allowing midwives to order lab tests, ultrasounds and prescribe medications. Midwives can attend births in hospitals, birth centers, and homes.',
      population: '14.7 million',
      keyPolicies: [
        'Midwifery Act, 1991',
        'Regulated Health Professions Act',
        'Nurse Practitioner Extended Class Regulations',
        'Pharmacy Act Regulations'
      ]
    },
    qc: {
      name: 'Quebec',
      midwives: 'Limited scope of practice',
      nursesPractitioners: 'Standard prescribing rights',
      pharmacists: 'Extended prescribing authority',
      accessScore: 75,
      details: 'Midwifery became regulated in Quebec in 1999. Midwives work primarily in birth centers (maisons de naissance) with limited hospital privileges.',
      population: '8.5 million',
      keyPolicies: [
        'Professional Code (Code des professions)',
        'Act Respecting the Ordre des sages-femmes du Québec',
        'Nurses Act',
        'Pharmacy Act'
      ]
    },
    bc: {
      name: 'British Columbia',
      midwives: 'Full scope of practice',
      nursesPractitioners: 'Extended prescribing rights',
      pharmacists: 'Extended prescribing authority',
      accessScore: 90,
      details: 'BC has one of the most progressive midwifery models in Canada. Midwives can prescribe medications, order tests, and attend births in hospitals, homes, or birth centers.',
      population: '5.1 million',
      keyPolicies: [
        'Health Professions Act',
        'Midwives Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    ab: {
      name: 'Alberta',
      midwives: 'Full scope of practice',
      nursesPractitioners: 'Extended prescribing rights',
      pharmacists: 'Extended prescribing authority',
      accessScore: 82,
      details: 'Alberta has a strong midwifery system with a focus on community-based care.',
      population: '4.1 million',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    mb: {
      name: 'Manitoba',
      midwives: 'Limited scope of practice',
      nursesPractitioners: 'Standard prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 70,
      details: 'Manitoba has a limited midwifery system with a focus on hospital-based care.',
      population: '1.3 million',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    sk: {
      name: 'Saskatchewan',
      midwives: 'Limited scope of practice',
      nursesPractitioners: 'Standard prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 68,
      details: 'Saskatchewan has a limited midwifery system with a focus on hospital-based care.',
      population: '1.1 million',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    ns: {
      name: 'Nova Scotia',
      midwives: 'Limited scope of practice',
      nursesPractitioners: 'Standard prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 72,
      details: 'Nova Scotia has a limited midwifery system with a focus on hospital-based care.',
      population: '900,000',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    nb: {
      name: 'New Brunswick',
      midwives: 'Limited scope of practice',
      nursesPractitioners: 'Limited prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 65,
      details: 'New Brunswick has a limited midwifery system with a focus on hospital-based care.',
      population: '700,000',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    nl: {
      name: 'Newfoundland and Labrador',
      midwives: 'Limited scope of practice',
      nursesPractitioners: 'Standard prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 60,
      details: 'Newfoundland and Labrador has a limited midwifery system with a focus on hospital-based care.',
      population: '500,000',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    pe: {
      name: 'Prince Edward Island',
      midwives: 'No regulated midwifery',
      nursesPractitioners: 'Standard prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 55,
      details: 'Prince Edward Island has no regulated midwifery.',
      population: '150,000',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    yt: {
      name: 'Yukon',
      midwives: 'Full scope of practice',
      nursesPractitioners: 'Extended prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 75,
      details: 'Yukon has a strong midwifery system with a focus on community-based care.',
      population: '300,000',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    nt: {
      name: 'Northwest Territories',
      midwives: 'Limited scope of practice',
      nursesPractitioners: 'Standard prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 62,
      details: 'Northwest Territories has a limited midwifery system with a focus on hospital-based care.',
      population: '100,000',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    },
    nu: {
      name: 'Nunavut',
      midwives: 'Limited scope of practice',
      nursesPractitioners: 'Limited prescribing rights',
      pharmacists: 'Limited prescribing authority',
      accessScore: 50,
      details: 'Nunavut has a limited midwifery system with a focus on hospital-based care.',
      population: '30,000',
      keyPolicies: [
        'Health Professions Act',
        'Midwifery Regulation',
        'Nurse Practitioners Standards, Limits and Conditions',
        'Pharmacy Operations and Drug Scheduling Act'
      ]
    }
  };

  const handleProvinceMouseEnter = (provinceCode: string, e: React.MouseEvent) => {
    setActiveProvince(provinceCode);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
    setShowTooltip(true);
  };

  const handleProvinceMouseMove = (e: React.MouseEvent) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleProvinceMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleProvinceClick = (provinceCode: string) => {
    setActiveProvince(provinceCode);
    setShowTooltip(false);
  };

  return (
    <div className="container-custom my-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Interactive Map of Canada</h1>
        <p className="text-muted-foreground mb-8">
          Explore healthcare access indicators across Canadian provinces and territories.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Healthcare Access by Province</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full aspect-[4/3]">
                 {/* -----------------------------------------------------------------
   Accurate province / territory shapes (taken from MapSvg.tsx)
   ----------------------------------------------------------------- */}
<svg
  viewBox="0 0 1000 800"
  className="w-full h-full"
  aria-label="Map of Canada showing healthcare access by province"
>
  {/* British Columbia */}
  <path
    d="M152,337 L147,311 L130,284 L142,248 L137,234 L125,227 L120,209 L99,212 L88,229 L79,218 L85,203 L75,188 L84,169 L73,154 L77,137 L88,129 L96,102 L107,91 L101,75 L109,53 L124,44 L132,53 L151,52 L166,59 L182,50 L199,52 L203,66 L219,62 L225,71 L245,73 L254,82 L274,84 L284,81 L291,91 L307,92 L324,109 L318,117 L318,136 L290,149 L274,163 L275,174 L254,209 L243,217 L236,243 L209,268 L191,315 L174,328 L174,341 L158,343 Z"
    className={`province ${activeProvince === 'bc' ? 'province-active' : ''}`}
    aria-label="British Columbia"
    onMouseEnter={(e) => handleProvinceMouseEnter('bc', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('bc')}
  />

  {/* Alberta */}
  <path
    d="M307,92 L324,109 L318,117 L318,136 L324,163 L341,167 L385,168 L386,321 L319,321 L317,337 L299,335 L299,320 L280,317 L275,301 L262,293 L261,279 L241,276 L236,243 L243,217 L254,209 L274,174 L274,163 L290,149 L318,136 Z"
    className={`province ${activeProvince === 'ab' ? 'province-active' : ''}`}
    aria-label="Alberta"
    onMouseEnter={(e) => handleProvinceMouseEnter('ab', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('ab')}
  />

  {/* Saskatchewan */}
  <path
    d="M385,168 L386,321 L453,319 L452,166 L385,168 Z"
    className={`province ${activeProvince === 'sk' ? 'province-active' : ''}`}
    aria-label="Saskatchewan"
    onMouseEnter={(e) => handleProvinceMouseEnter('sk', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('sk')}
  />

  {/* Manitoba */}
  <path
    d="M452,166 L453,319 L518,312 L522,303 L535,299 L542,277 L538,240 L525,225 L525,196 L514,178 L514,160 L503,160 L492,148 L477,149 L453,164 L452,166 Z"
    className={`province ${activeProvince === 'mb' ? 'province-active' : ''}`}
    aria-label="Manitoba"
    onMouseEnter={(e) => handleProvinceMouseEnter('mb', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('mb')}
  />

  {/* Ontario */}
  <path
    d="M518,312 L522,303 L535,299 L542,277 L538,240 L525,225 L525,196 L549,178 L566,180 L579,173 L596,174 L608,183 L623,179 L645,180 L660,174 L671,186 L676,204 L685,208 L702,203 L718,208 L729,222 L747,229 L747,246 L725,252 L709,266 L693,269 L683,288 L662,280 L654,258 L639,256 L632,268 L609,270 L596,257 L571,259 L562,285 L559,311 L541,318 L518,312 Z"
    className={`province ${activeProvince === 'on' ? 'province-active' : ''}`}
    aria-label="Ontario"
    onMouseEnter={(e) => handleProvinceMouseEnter('on', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('on')}
  />

  {/* Quebec */}
  <path
    d="M747,229 L747,246 L725,252 L709,266 L693,269 L683,288 L662,280 L654,258 L639,256 L632,268 L609,270 L596,257 L571,259 L562,285 L559,311 L579,339 L627,357 L635,382 L654,391 L677,393 L700,375 L719,380 L716,401 L735,426 L749,421 L773,426 L781,417 L798,413 L832,390 L841,370 L834,358 L824,358 L811,346 L812,333 L794,336 L794,319 L804,305 L795,299 L795,286 L813,278 L816,252 L794,241 L781,227 L763,227 L747,229 Z"
    className={`province ${activeProvince === 'qc' ? 'province-active' : ''}`}
    aria-label="Quebec"
    onMouseEnter={(e) => handleProvinceMouseEnter('qc', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('qc')}
  />

  {/* New Brunswick */}
  <path
    d="M798,413 L807,396 L832,390 L841,370 L851,374 L851,400 L864,411 L855,429 L836,431 L826,420 L810,428 L798,413 Z"
    className={`province ${activeProvince === 'nb' ? 'province-active' : ''}`}
    aria-label="New Brunswick"
    onMouseEnter={(e) => handleProvinceMouseEnter('nb', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('nb')}
  />

  {/* Nova Scotia */}
  <path
    d="M855,429 L836,431 L826,420 L810,428 L813,438 L837,446 L846,439 L860,441 L876,417 L855,429 Z"
    className={`province ${activeProvince === 'ns' ? 'province-active' : ''}`}
    aria-label="Nova Scotia"
    onMouseEnter={(e) => handleProvinceMouseEnter('ns', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('ns')}
  />

  {/* Prince Edward Island */}
  <path
    d="M851,400 L864,411 L880,403 L865,398 L851,400 Z"
    className={`province ${activeProvince === 'pe' ? 'province-active' : ''}`}
    aria-label="Prince Edward Island"
    onMouseEnter={(e) => handleProvinceMouseEnter('pe', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('pe')}
  />

  {/* Newfoundland and Labrador */}
  <path
    d="M798,413 L781,417 L773,426 L749,421 L735,426 L746,446 L766,453 L801,453 L801,447 L831,446 L841,434 L842,419 L811,428 L798,413 Z"
    className={`province ${activeProvince === 'nl' ? 'province-active' : ''}`}
    aria-label="Newfoundland and Labrador"
    onMouseEnter={(e) => handleProvinceMouseEnter('nl', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('nl')}
  />

  {/* Yukon */}
  <path
    d="M182,50 L199,52 L203,66 L219,62 L225,71 L245,73 L254,82 L274,84 L274,120 L238,120 L238,92 L224,93 L219,104 L206,101 L196,111 L178,105 L169,93 L168,71 L182,50 Z"
    className={`province ${activeProvince === 'yt' ? 'province-active' : ''}`}
    aria-label="Yukon"
    onMouseEnter={(e) => handleProvinceMouseEnter('yt', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('yt')}
  />

  {/* Northwest Territories */}
  <path
    d="M274,84 L284,81 L291,91 L307,92 L341,167 L385,168 L452,166 L453,164 L477,149 L492,148 L503,160 L514,160 L514,178 L525,196 L525,120 L472,120 L354,120 L274,120 L274,84 Z"
    className={`province ${activeProvince === 'nt' ? 'province-active' : ''}`}
    aria-label="Northwest Territories"
    onMouseEnter={(e) => handleProvinceMouseEnter('nt', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('nt')}
  />

  {/* Nunavut */}
  <path
    d="M472,120 L525,120 L525,196 L514,178 L514,160 L503,160 L492,148 L477,149 L453,164 L452,166 L525,120 L525,80 L550,80 L600,40 L600,20 L472,20 L472,120 Z"
    className={`province ${activeProvince === 'nu' ? 'province-active' : ''}`}
    aria-label="Nunavut"
    onMouseEnter={(e) => handleProvinceMouseEnter('nu', e)}
    onMouseMove={handleProvinceMouseMove}
    onMouseLeave={handleProvinceMouseLeave}
    onClick={() => handleProvinceClick('nu')}
  />
</svg>

                  {showTooltip && activeProvince && (
                    <div
                      className="map-tooltip"
                      style={{
                        left: `${tooltipPosition.x + 10}px`,
                        top: `${tooltipPosition.y + 10}px`,
                      }}
                    >
                      <strong>{provinceData[activeProvince]?.name}</strong>
                      <div>Access Score: {provinceData[activeProvince]?.accessScore}/100</div>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Lower Access</span>
                    <div className="flex-grow mx-2 h-2 bg-gradient-to-r from-red-300 via-amber-300 to-green-300 rounded"></div>
                    <span className="text-sm text-muted-foreground">Higher Access</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            {activeProvince ? (
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{provinceData[activeProvince]?.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="details">Details</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4 mt-4">
                      <div>
                        <h3 className="font-medium">Healthcare Access Score</h3>
                        <div className="w-full bg-muted rounded-full h-2.5 mt-1">
                          <div
                            className="bg-maple h-2.5 rounded-full"
                            style={{ width: `${provinceData[activeProvince]?.accessScore}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                          <span></span>
                          <span>{provinceData[activeProvince]?.accessScore}/100</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Provider Types</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm font-medium">Midwives</div>
                            <div className="text-muted-foreground text-sm">
                              {provinceData[activeProvince]?.midwives}
                            </div>
                            <div className="text-sm mt-1">{provinceData[activeProvince]?.details}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Nurse Practitioners</div>
                            <div className="text-muted-foreground text-sm">
                              {provinceData[activeProvince]?.nursesPractitioners}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium">Pharmacists</div>
                            <div className="text-muted-foreground text-sm">
                              {provinceData[activeProvince]?.pharmacists}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="details" className="space-y-4 mt-4">
                      <div>
                        <h3 className="font-medium mb-2">Population</h3>
                        <p className="text-sm">{provinceData[activeProvince]?.population}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-medium">Key Policies</h3>
                        <ul className="space-y-1 text-sm">
                          {provinceData[activeProvince]?.keyPolicies.map((policy, index) => (
                            <li key={index}>• {policy}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Comparison</h3>
                        <p className="text-sm text-muted-foreground">
                          {provinceData[activeProvince]?.name} ranks{' '}
                          {Object.values(provinceData)
                            .sort((a, b) => b.accessScore - a.accessScore)
                            .findIndex((p) => p.name === provinceData[activeProvince]?.name) + 1}
                          th out of 13 provinces and territories for healthcare access.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground">
                    Click on a province or territory on the map to view its details.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
