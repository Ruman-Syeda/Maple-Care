// src/components/accessibility-widget.tsx
import { useEffect, useState } from 'react';
import i18n from '@/i18n';                   // ← already present
import {
  Accessibility, ChevronDown, ChevronUp,
  Globe, Maximize, Minimize,
} from 'lucide-react';
import {
  Popover, PopoverContent, PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  Select, SelectContent, SelectItem, SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const toggleRootClass = (cls: string, value: boolean) => {
  const root = document.documentElement;
  value ? root.classList.add(cls) : root.classList.remove(cls);
};

export function AccessibilityWidget() {
  const [isExpanded,   setIsExpanded]   = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontScale,    setFontScale]    = useState(1);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [language,     setLanguage]     = useState<'en' | 'fr' | 'es'>('en');

  /* side-effects ----------------------------------------------------------- */
  useEffect(() => toggleRootClass('hc', highContrast), [highContrast]);
  useEffect(() => toggleRootClass('motion-reduce', reduceMotion), [reduceMotion]);
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
  }, [fontScale]);

  /* component -------------------------------------------------------------- */
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="default" size="icon" className="rounded-full h-12 w-12 shadow-lg">
            <Accessibility className="h-6 w-6" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-80" align="end">
          <div className="space-y-4">
            {/* header */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Accessibility Tools</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setIsExpanded(e => !e)}
              >
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>

            {/* basic options */}
            <div className="space-y-4">
              {/* High contrast */}
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="hc">High Contrast</Label>
                  <div className="text-muted-foreground text-xs">Increase colour contrast</div>
                </div>
                <Switch id="hc" checked={highContrast} onCheckedChange={setHighContrast} />
              </div>

              {/* Text size */}
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Text Size</Label>
                  <div className="text-muted-foreground text-xs">Adjust text size</div>
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setFontScale(s => Math.max(0.8, s - 0.1))}
                  >
                    <Minimize className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setFontScale(s => Math.min(1.5, s + 0.1))}
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Language */}
              <div className="space-y-1">
                <Label htmlFor="language-select">Language</Label>
                <Select
                  value={language}
                  onValueChange={(v: 'en' | 'fr' | 'es') => {
                    setLanguage(v);
                    i18n.changeLanguage(v);   // ← THE two crucial lines
                  }}
                >
                  <SelectTrigger id="language-select" className="w-full">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* advanced options */}
            {isExpanded && (
              <div className="pt-2 space-y-4 border-t">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="motion">Reduce Motion</Label>
                    <div className="text-muted-foreground text-xs">Minimise animations</div>
                  </div>
                  <Switch id="motion" checked={reduceMotion} onCheckedChange={setReduceMotion} />
                </div>
              </div>
            )}

            {/* footer */}
            <div className="pt-2 flex justify-between items-center border-t">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.actioncanadashr.org/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Accessibility Statement
                </a>
              </Button>
              <Button variant="default" size="sm" onClick={() => alert('Settings saved!')}>
                Apply Settings
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}