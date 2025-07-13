
// Sound utility file to manage audio effects across the application

// Map of sound types to their file paths
const soundPaths: Record<string, string> = {
  alert: '/sounds/alert.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  click: '/sounds/click.mp3',
  paper: '/sounds/paper.mp3',
  alarm: '/sounds/alarm.mp3'
};

// Set of audio elements
const audioElements: Record<string, HTMLAudioElement> = {};

// Create and cache audio elements for better performance
const createAudio = (src: string, key: string): HTMLAudioElement => {
  if (audioElements[key]) {
    return audioElements[key];
  }
  
  const audio = new Audio(src);
  audio.preload = 'auto';
  audioElements[key] = audio;
  
  // Preload the audio
  try {
    audio.load();
  } catch (e) {
    console.warn(`Failed to preload audio: ${key}`, e);
  }
  
  return audio;
};

// Initialize sound state from localStorage or default to enabled
let soundEnabled = localStorage.getItem('soundEnabled') !== 'false';

// Sound control - respects user preferences
export const toggleSound = (): boolean => {
  soundEnabled = !soundEnabled;
  localStorage.setItem('soundEnabled', soundEnabled.toString());
  return soundEnabled;
};

export const isSoundEnabled = (): boolean => soundEnabled;

// Base64 encoded minimal beep sound for fallback
const FALLBACK_SOUND_BASE64 = "data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU9vT18A";

// Fallback to default sound if a file fails to load
const playFallbackSound = () => {
  try {
    // This is a very short beep sound in base64 format
    const beep = new Audio(FALLBACK_SOUND_BASE64);
    beep.volume = 0.2;
    beep.play().catch(err => console.warn("Even fallback sound failed", err));
  } catch (e) {
    console.warn("Could not play fallback sound", e);
  }
};

// General sound player function with error handling and fallback
export const playSound = (type: string): void => {
  if (!soundEnabled) return;
  
  const soundPath = soundPaths[type];
  if (!soundPath) {
    console.warn(`Sound type ${type} not found`);
    playFallbackSound();
    return;
  }
  
  try {
    const audio = createAudio(soundPath, type);
    
    // Reset and play
    audio.currentTime = 0;
    
    // Handle playback with promise and error catching
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.info(`Sound ${type} failed to play, using fallback`, err);
        playFallbackSound();
      });
    }
  } catch (err) {
    console.warn(`Error with sound playback (${type}):`, err);
    playFallbackSound();
  }
};

// Individual sound player functions for backward compatibility
export const playAlertSound = (): void => playSound('alert');
export const playSuccessSound = (): void => playSound('success');
export const playErrorSound = (): void => playSound('error');
export const playClickSound = (): void => playSound('click');
export const playPaperSound = (): void => playSound('paper');
export const playAlarmSound = (): void => playSound('alarm');

// Add dark mode state management to our utils
let darkMode = localStorage.getItem('darkMode') === 'true';

export const toggleDarkMode = (): boolean => {
  darkMode = !darkMode;
  localStorage.setItem('darkMode', darkMode.toString());
  
  // Update document class for dark mode
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  return darkMode;
};

export const isDarkMode = (): boolean => {
  return darkMode;
};

// Initialize on module load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Preload sounds 
    Object.entries(soundPaths).forEach(([key, path]) => {
      createAudio(path, key);
    });
    
    // Apply dark mode if enabled
    if (isDarkMode()) {
      document.documentElement.classList.add('dark');
    }
  });
}