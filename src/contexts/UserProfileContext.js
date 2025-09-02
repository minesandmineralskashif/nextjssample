import { createContext } from 'react';

export const UserProfileContext = createContext({
  isDoingTutorial: false,
  setIsDoingTutorial: (b) => { UserProfileContext.isDoingTutorial = b; },
  isSidebarOpen: false,
  setIsSidebarOpen: (b) => { UserProfileContext.isSidebarOpen = b; },
  isMobileSidebarOpen: false,
  setIsMobileSidebarOpen: (b) => { UserProfileContext.isMobileSidebarOpen = b; },
  sidebarOpenState: false,
  setSidebarOpenState: (b) => { UserProfileContext.sidebarOpenState = b; },
  isShowDashboardSidebar: false,
  setIsShowDashboardSidebar: (b) => { UserProfileContext.isShowDashboardSidebar = b; },
  isShowMobileDashboardSidebar: false,
  setIsShowMobileDashboardSidebar: (b) => { UserProfileContext.isShowMobileDashboardSidebar = b; },
  userProfile: {},
  setUserProfile: (b) => { UserProfileContext.userProfile = b; },
});
export const UserProfilePictureContext = createContext('');
