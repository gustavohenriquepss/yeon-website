import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/context/LanguageContext';
import { Platform } from '@/data/platforms';
import { Info } from 'lucide-react';
interface PlatformInputProps {
  platform: Platform;
  value: number;
  onChange: (value: number) => void;
}
const PlatformInput: React.FC<PlatformInputProps> = ({
  platform,
  value,
  onChange
}) => {
  const {
    t
  } = useLanguage();
  const formatRate = (rate: number): string => {
    return `$${rate.toFixed(4)}`;
  };
  return <div className="flex flex-col p-4 rounded-xl bg-[#3D3D3D] border border-white/5 hover:border-[#FF3C27]/20 transition-all">
      <div className="flex items-center mb-3 gap-3">
        <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center p-1" style={{
        backgroundColor: `${platform.color}30`
      }}>
          <img src={platform.logo} alt={platform.name} className="w-7 h-7 object-contain" />
        </div>
        <Label htmlFor={platform.id} className="text-lg font-medium">
          {platform.name}
        </Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="ml-auto text-muted-foreground hover:text-foreground cursor-help">
                <Info className="h-4 w-4" />
              </span>
            </TooltipTrigger>
            <TooltipContent className="flex flex-col gap-1">
              <p>{t('perStreamTooltip')}: {formatRate(platform.rate)}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="relative mt-1">
        <Input id={platform.id} type="number" min="0" value={value || ''} onChange={e => onChange(Number(e.target.value))} className="bg-[#181818] border-white/10 focus:border-[#FF3C27]" placeholder="0" />
      </div>
    </div>;
};
export default PlatformInput;