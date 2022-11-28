import create from "zustand"

interface INavigationStore{
    status: boolean
    toggleStatus: () => void
    disableNavigation: () => void
}
const NavigationStore = create<INavigationStore>()((set) => ({
    status: false,
    toggleStatus: () => set((state) => ({
        status: !state.status
    })),
    disableNavigation: () => set(state => ({
        status: false
    }))
}))

export default NavigationStore