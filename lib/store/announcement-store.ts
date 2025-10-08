import { create } from "zustand"

interface AnnouncementState {
  isVisible: boolean
  hideAnnouncement: () => void
  showAnnouncement: () => void
}

export const useAnnouncementStore = create<AnnouncementState>((set) => ({
  isVisible: true,
  hideAnnouncement: () => set({ isVisible: false }),
  showAnnouncement: () => set({ isVisible: true }),
}))
