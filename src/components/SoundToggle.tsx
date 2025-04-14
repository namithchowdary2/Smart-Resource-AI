
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toggleSound, isSoundEnabled, playSound } from '@/utils/soundUtils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SoundToggle: React.FC = () => {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  // Sync state with localStorage on mount
  useEffect(() => {
    const storedSoundEnabled = localStorage.getItem('soundEnabled');
    if (storedSoundEnabled !== null) {
      setSoundOn(storedSoundEnabled === 'true');
    }
  }, []);

  const handleToggleSound = () => {
    const isEnabled = toggleSound();
    setSoundOn(isEnabled);
    
    // Try to play a sound - if sound is enabled, this should work
    if (isEnabled) {
      playSound('click');
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleToggleSound}
            className="h-9 w-9 rounded-full hover:bg-gray-200 transition-colors"
            aria-label={soundOn ? "Mute sounds" : "Enable sounds"}
          >
            {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{soundOn ? 'Mute sounds' : 'Enable sounds'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SoundToggle;