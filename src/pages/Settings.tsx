
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, Bell, Eye, Globe, Shield, User, Moon, Sun } from 'lucide-react';
import Header from '@/components/Header';
import { toast } from '@/hooks/useToast';
import { playSound, toggleSound, isSoundEnabled, toggleDarkMode, isDarkMode } from '@/utils/soundUtils';

const Settings = () => {
  const { user, isAuth } = useAuth();
  const [darkMode, setDarkMode] = useState(isDarkMode());
  const [soundEnabled, setSoundEnabled] = useState(isSoundEnabled());
  
  useEffect(() => {
    // Sync state with localStorage on mount
    const storedDarkMode = localStorage.getItem('darkMode');
    const storedSoundEnabled = localStorage.getItem('soundEnabled');
    
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === 'true');
    }
    
    if (storedSoundEnabled !== null) {
      setSoundEnabled(storedSoundEnabled !== 'false');
    }
  }, []);
  
  const handleSave = () => {
    playSound('success');
    toast({
      title: "Settings saved",
      description: "Your settings have been successfully updated.",
      variant: "default",
    });
  };
  
  const handleSwitchToggle = () => {
    playSound('click');
  };
  
  const handleDarkModeToggle = () => {
    const isDark = toggleDarkMode();
    setDarkMode(isDark);
    handleSwitchToggle();
  };
  
  const handleSoundToggle = () => {
    const isEnabled = toggleSound();
    setSoundEnabled(isEnabled);
    
    // Try to play a sound - if sound is enabled, this should work
    if (isEnabled) {
      playSound('click');
    }
  };

  if (!isAuth) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-8">
          <Alert variant="destructive" className="mb-6">
            <Info className="h-4 w-4" />
            <AlertTitle>Authentication Required</AlertTitle>
            <AlertDescription>
              Please log in to access settings.
            </AlertDescription>
          </Alert>
          <div className="flex justify-center">
            <Button href="/login" onClick={() => playSound('click')}>Log In</Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <Tabs defaultValue="account">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-64">
              <TabsList className="flex flex-col h-auto bg-card w-full border rounded-md p-1">
                <TabsTrigger 
                  value="account" 
                  className="justify-start w-full mb-1 data-[state=active]:bg-accent"
                  onClick={() => playSound('click')}
                >
                  <User className="mr-2 h-4 w-4" />
                  Account
                </TabsTrigger>
                <TabsTrigger 
                  value="appearance" 
                  className="justify-start w-full mb-1 data-[state=active]:bg-accent"
                  onClick={() => playSound('click')}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="justify-start w-full mb-1 data-[state=active]:bg-accent"
                  onClick={() => playSound('click')}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger 
                  value="privacy" 
                  className="justify-start w-full data-[state=active]:bg-accent"
                  onClick={() => playSound('click')}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Privacy & Security
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="flex-1">
              <TabsContent value="account" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account information and preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Display Name</Label>
                      <Input id="name" defaultValue={user?.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue={user?.email} type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <select
                        id="language"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        defaultValue="en"
                        onChange={() => playSound('click')}
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave}>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="appearance" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Appearance Settings</CardTitle>
                    <CardDescription>
                      Customize how the application looks and feels.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                      </div>
                      <Switch 
                        id="dark-mode" 
                        checked={darkMode} 
                        onCheckedChange={handleDarkModeToggle}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Bell className="h-4 w-4" />
                        <Label htmlFor="sound-enabled">Sound Effects</Label>
                      </div>
                      <Switch 
                        id="sound-enabled" 
                        checked={soundEnabled} 
                        onCheckedChange={handleSoundToggle}
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Label htmlFor="theme" className="mb-2 block">Theme Color</Label>
                      <div className="grid grid-cols-5 gap-2">
                        <div 
                          className="h-10 w-10 rounded-full bg-blue-500 cursor-pointer ring-2 ring-offset-2 ring-offset-background ring-blue-500"
                          onClick={() => {
                            playSound('click');
                            toast({
                              title: "Theme changed",
                              description: "Blue theme selected.",
                              variant: "default",
                            });
                          }}
                        />
                        <div 
                          className="h-10 w-10 rounded-full bg-green-500 cursor-pointer"
                          onClick={() => {
                            playSound('click');
                            toast({
                              title: "Theme changed",
                              description: "Green theme selected.",
                              variant: "default",
                            });
                          }}
                        />
                        <div 
                          className="h-10 w-10 rounded-full bg-purple-500 cursor-pointer"
                          onClick={() => {
                            playSound('click');
                            toast({
                              title: "Theme changed",
                              description: "Purple theme selected.",
                              variant: "default",
                            });
                          }}
                        />
                        <div 
                          className="h-10 w-10 rounded-full bg-amber-500 cursor-pointer"
                          onClick={() => {
                            playSound('click');
                            toast({
                              title: "Theme changed",
                              description: "Amber theme selected.",
                              variant: "default",
                            });
                          }}
                        />
                        <div 
                          className="h-10 w-10 rounded-full bg-rose-500 cursor-pointer"
                          onClick={() => {
                            playSound('click');
                            toast({
                              title: "Theme changed",
                              description: "Rose theme selected.",
                              variant: "default",
                            });
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave}>Save Preferences</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Choose what notifications you receive.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive updates via email</p>
                      </div>
                      <Switch id="email-notifications" defaultChecked onCheckedChange={handleSwitchToggle} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">System Alerts</p>
                        <p className="text-sm text-muted-foreground">Critical system notifications</p>
                      </div>
                      <Switch id="system-alerts" defaultChecked onCheckedChange={handleSwitchToggle} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Communications</p>
                        <p className="text-sm text-muted-foreground">Receive marketing materials</p>
                      </div>
                      <Switch id="marketing" onCheckedChange={handleSwitchToggle} />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave}>Save Notification Settings</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="privacy" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy & Security</CardTitle>
                    <CardDescription>
                      Manage your privacy settings and security options.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Switch id="2fa" onCheckedChange={handleSwitchToggle} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Data Collection</p>
                        <p className="text-sm text-muted-foreground">Allow anonymous usage data collection</p>
                      </div>
                      <Switch id="data-collection" defaultChecked onCheckedChange={handleSwitchToggle} />
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="destructive" 
                        onClick={() => {
                          playSound('alert');
                          toast({
                            title: "Account deletion",
                            description: "Please contact support to delete your account.",
                            variant: "destructive",
                          });
                        }}
                      >
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSave}>Save Security Settings</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;