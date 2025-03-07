import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface SidebarProviderProps {
  children: ReactNode;
}

// Provider Component
export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    return localStorage.getItem('sidebarOpen') === 'true';
  });

  // Save to localStorage when isOpen changes
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook for consuming context
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
