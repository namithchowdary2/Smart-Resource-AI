import React from 'react';
import { motion } from 'framer-motion';
import { Bell, BellOff, AlertTriangle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEnergyAlarm } from '@/hooks/useEnergyAlarm';
import { playClickSound } from '@/utils/soundUtils';

const EnergyAlarmControl: React.FC = () => {
  const {
    settings,
    energyData,
    isAlarmActive,
    updateSettings,
    resetAlarm,
    triggerAlarm
  } = useEnergyAlarm();

  const handleToggleAlarm = () => {
    playClickSound();
    updateSettings({ enabled: !settings.enabled });
    if (!settings.enabled) {
      resetAlarm();
    }
  };

  const handleThresholdChange = (value: number[]) => {
    updateSettings({ threshold: value[0] });
  };

  const handleTestAlarm = () => {
    triggerAlarm(settings.threshold + 10);
  };

  const getUsageStatus = () => {
    if (energyData.currentUsage > settings.threshold) {
      return { color: 'text-red-500', status: 'High', icon: AlertTriangle };
    } else if (energyData.currentUsage > settings.threshold * 0.8) {
      return { color: 'text-yellow-500', status: 'Medium', icon: Bell };
    } else {
      return { color: 'text-green-500', status: 'Normal', icon: Bell };
    }
  };

  const usageStatus = getUsageStatus();
  const StatusIcon = usageStatus.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="eco-card">
        <CardHeader className="bg-eco-gradient text-white">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Energy Usage Alarm
            </div>
            <Badge className={`bg-white/20 ${isAlarmActive ? 'animate-pulse' : ''}`}>
              {isAlarmActive ? 'ALARM ACTIVE' : 'MONITORING'}
            </Badge>
          </CardTitle>
          <CardDescription className="text-white/80">
            Get notified when energy usage exceeds your threshold
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          {/* Current Usage Display */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <StatusIcon className={`mr-2 h-5 w-5 ${usageStatus.color}`} />
              <div>
                <p className="font-medium">Current Usage</p>
                <p className="text-sm text-gray-500">
                  Updated: {energyData.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-2xl font-bold ${usageStatus.color}`}>
                {energyData.currentUsage.toFixed(1)}%
              </p>
              <p className={`text-sm ${usageStatus.color}`}>
                {usageStatus.status}
              </p>
            </div>
          </div>

          {/* Alarm Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Settings className="mr-2 h-4 w-4 text-gray-500" />
                <span className="font-medium">Enable Alarm</span>
              </div>
              <Switch
                checked={settings.enabled}
                onCheckedChange={handleToggleAlarm}
              />
            </div>

            {settings.enabled && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium">Alarm Threshold</label>
                    <span className="text-sm font-medium text-gray-500">
                      {settings.threshold}%
                    </span>
                  </div>
                  <Slider
                    value={[settings.threshold]}
                    min={50}
                    max={95}
                    step={5}
                    onValueChange={handleThresholdChange}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>50%</span>
                    <span>95%</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleTestAlarm}
                    className="flex-1"
                  >
                    <Bell className="mr-1 h-3 w-3" />
                    Test Alarm
                  </Button>
                  
                  {isAlarmActive && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetAlarm}
                      className="flex-1"
                    >
                      <BellOff className="mr-1 h-3 w-3" />
                      Reset Alarm
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-sm text-gray-500">Threshold</p>
              <p className="font-bold text-eco-blue">{settings.threshold}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Status</p>
              <p className={`font-bold ${usageStatus.color}`}>
                {settings.enabled ? usageStatus.status : 'Disabled'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnergyAlarmControl;