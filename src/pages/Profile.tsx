
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { User, Bell, Shield, Lock, Info, Save, Camera } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import { playSound } from '@/utils/soundUtils';
import { toast } from '@/hooks/useToast';

const Profile = () => {
  const { user, isAuth } = useAuth();
  const [activeSection, setActiveSection] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'User',
    email: user?.email || 'user@gmail.com', 
    bio: 'Resource conservation enthusiast and tech professional. Working on sustainable solutions for our future.',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567',
    website: 'https://mywebsite.com',
    profilePicture: user?.avatar || '/lovable-uploads/ba62b39f-c5fc-4b24-8e5e-c5bb039941ec.png'
  });
  
  const [newProfileImage, setNewProfileImage] = useState<File | null>(null);

  // Function to handle button clicks with sound
  const handleButtonClick = (section: string) => {
    playSound('click');
    setActiveSection(section);
    setIsEditing(true);
    toast({
      title: `${section} section`,
      description: `You are now editing the ${section} section.`,
      variant: "default",
    });
  };
  
  const handleSave = () => {
    playSound('success');
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
      variant: "default",
    });
  };
  
  const handleCancel = () => {
    playSound('click');
    setIsEditing(false);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProfileImage(e.target.files[0]);
      
      // Create a temporary URL for preview
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileData({
            ...profileData,
            profilePicture: event.target.result as string
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
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
              Please log in to view your profile.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="relative">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={profileData.profilePicture} alt={profileData.name} />
                    <AvatarFallback className="text-xl">{profileData.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <label htmlFor="profile-image" className="absolute bottom-4 right-0 bg-primary hover:bg-primary/90 text-white p-1 rounded-full cursor-pointer">
                    <Camera className="h-4 w-4" />
                    <input 
                      type="file" 
                      id="profile-image" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <CardTitle>{profileData.name}</CardTitle>
                <CardDescription>{profileData.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button 
                    variant="outline" 
                    className={`justify-start ${activeSection === 'Edit Profile' ? 'bg-accent' : ''}`}
                    onClick={() => handleButtonClick('Edit Profile')}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`justify-start ${activeSection === 'Notification Settings' ? 'bg-accent' : ''}`}
                    onClick={() => handleButtonClick('Notification Settings')}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notification Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`justify-start ${activeSection === 'Privacy Settings' ? 'bg-accent' : ''}`}
                    onClick={() => handleButtonClick('Privacy Settings')}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Privacy Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`justify-start ${activeSection === 'Security' ? 'bg-accent' : ''}`}
                    onClick={() => handleButtonClick('Security')}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            {activeSection && isEditing ? (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>{activeSection}</CardTitle>
                  <CardDescription>Update your {activeSection.toLowerCase()} information</CardDescription>
                </CardHeader>
                <CardContent>
                  {activeSection === 'Edit Profile' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name"
                            name="name"
                            value={profileData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea 
                            id="bio"
                            name="bio"
                            value={profileData.bio}
                            onChange={handleInputChange}
                            rows={4}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input 
                            id="location"
                            name="location"
                            value={profileData.location}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input 
                            id="phone"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input 
                            id="website"
                            name="website"
                            value={profileData.website}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 'Notification Settings' && (
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-4">
                        <Label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4" defaultChecked />
                          <span>Email notifications</span>
                        </Label>
                        
                        <Label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4" defaultChecked />
                          <span>Research updates</span>
                        </Label>
                        
                        <Label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>Marketing emails</span>
                        </Label>
                        
                        <Label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4" defaultChecked />
                          <span>Security alerts</span>
                        </Label>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 'Privacy Settings' && (
                    <div className="space-y-4">
                      <div className="flex flex-col space-y-4">
                        <Label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4" defaultChecked />
                          <span>Show my profile to other users</span>
                        </Label>
                        
                        <Label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4" defaultChecked />
                          <span>Allow data collection for improvement</span>
                        </Label>
                        
                        <Label className="flex items-center space-x-2">
                          <input type="checkbox" className="h-4 w-4" />
                          <span>Share my usage data with research partners</span>
                        </Label>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 'Security' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        
                        <div className="pt-2">
                          <Label className="flex items-center space-x-2">
                            <input type="checkbox" className="h-4 w-4" />
                            <span>Enable two-factor authentication</span>
                          </Label>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                  <Button onClick={handleSave} className="flex items-center">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Your personal information and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Full Name</label>
                          <p className="text-gray-700 dark:text-gray-300">{profileData.name}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Email</label>
                          <p className="text-gray-700 dark:text-gray-300">{profileData.email}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Location</label>
                          <p className="text-gray-700 dark:text-gray-300">{profileData.location}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Phone</label>
                          <p className="text-gray-700 dark:text-gray-300">{profileData.phone}</p>
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-sm font-medium">Bio</label>
                          <p className="text-gray-700 dark:text-gray-300">{profileData.bio}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Website</label>
                          <p className="text-gray-700 dark:text-gray-300">
                            <a 
                              href={profileData.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {profileData.website}
                            </a>
                          </p>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Member Since</label>
                          <p className="text-gray-700 dark:text-gray-300">April 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Account Activity</CardTitle>
                    <CardDescription>Recent activity on your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-md dark:border-gray-700">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">Login</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Successfully logged in</p>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Just now</p>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-md dark:border-gray-700">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">Profile Edit</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Updated profile information</p>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-md dark:border-gray-700">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">Research Download</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Downloaded research paper</p>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;