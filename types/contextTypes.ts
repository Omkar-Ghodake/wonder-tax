export type ScreenContextType = {
  windowSize: {
    width?: number
    height?: number
  }
} | null

export type MobileHomeStepsContextType = {
  userData: any
  setUserData: React.Dispatch<React.SetStateAction<any>>
} | null
