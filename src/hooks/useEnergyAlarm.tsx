import { useState, useEffect, useCallback } from 'react';
import { playSound } from '@/utils/soundUtils';
import { toast } from 'sonner';

interface EnergyAlarmSettings {
  enabled: boolean;
  threshold: number; // percentage threshold (e.g., 80 for 80%)
  interval: number; // check interval in milliseconds
}

interface EnergyUsageData {
  currentUsage: number;
  timestamp: Date;
  isExcessive: boolean;
}

export const useEnergyAlarm = (initialSettings?: Partial<EnergyAlarmSettings>) => {
  const [settings, setSettings] = useState<EnergyAlarmSettings>({
    enabled: true,
    threshold: 80, // Default threshold at 80%
    interval: 5000, // Check every 5 seconds
    ...initialSettings
  });

  const [energyData, setEnergyData] = useState<EnergyUsageData>({
    currentUsage: 0,
    timestamp: new Date(),
    isExcessive: false
  });

  const [isAlarmActive, setIsAlarmActive] = useState(false);
  const [lastAlarmTime, setLastAlarmTime] = useState<Date | null>(null);

  // Cooldown period to prevent spam (30 seconds)
  const ALARM_COOLDOWN = 30000;

  const checkEnergyUsage = useCallback((usage: number) => {
    const now = new Date();
    const isExcessive = usage > settings.threshold;
    
    setEnergyData({
      currentUsage: usage,
      timestamp: now,
      isExcessive
    });

    // Trigger alarm if usage is excessive and not in cooldown
    if (isExcessive && settings.enabled && !isAlarmActive) {
      const timeSinceLastAlarm = lastAlarmTime ? now.getTime() - lastAlarmTime.getTime() : ALARM_COOLDOWN + 1;
      
      if (timeSinceLastAlarm > ALARM_COOLDOWN) {
        triggerAlarm(usage);
      }
    } else if (!isExcessive && isAlarmActive) {
      // Reset alarm when usage is back to normal
      setIsAlarmActive(false);
    }
  }, [settings.threshold, settings.enabled, isAlarmActive, lastAlarmTime]);

  const triggerAlarm = useCallback((usage: number) => {
    setIsAlarmActive(true);
    setLastAlarmTime(new Date());
    
    // Play alarm sound
    playSound('alarm');
    
    // Show notification
    toast.error(
      `⚠️ High Energy Usage Alert!`,
      {
        description: `Current usage: ${usage.toFixed(1)}% (Threshold: ${settings.threshold}%)`,
        duration: 8000,
        action: {
          label: "Reduce Usage",
          onClick: () => {
            // Could trigger energy reduction recommendations
            toast.info("💡 Consider turning off non-essential appliances");
          }
        }
      }
    );
  }, [settings.threshold]);

  const updateSettings = useCallback((newSettings: Partial<EnergyAlarmSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  const resetAlarm = useCallback(() => {
    setIsAlarmActive(false);
    setLastAlarmTime(null);
  }, []);

  // Simulate energy monitoring (in real app, this would come from IoT devices)
  const simulateEnergyUsage = useCallback(() => {
    // Generate random energy usage that occasionally spikes
    const baseUsage = 40 + Math.random() * 30; // 40-70% base
    const spike = Math.random() > 0.9 ? Math.random() * 40 : 0; // 10% chance of spike
    const simulatedUsage = Math.min(100, baseUsage + spike);
    
    checkEnergyUsage(simulatedUsage);
  }, [checkEnergyUsage]);

  // Auto-monitoring effect
  useEffect(() => {
    if (settings.enabled) {
      const interval = setInterval(simulateEnergyUsage, settings.interval);
      return () => clearInterval(interval);
    }
  }, [settings.enabled, settings.interval, simulateEnergyUsage]);

  return {
    settings,
    energyData,
    isAlarmActive,
    updateSettings,
    checkEnergyUsage,
    resetAlarm,
    triggerAlarm
  };
};