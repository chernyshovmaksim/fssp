import create from "zustand"

interface INavigationStore {
    status: boolean
    toggleStatus: () => void
}

const NavigationStore = create<INavigationStore>()((set) => ({
    status: false,
    toggleStatus: () => set((state) => ({
        status: !state.status
    }))
}))

export default NavigationStore