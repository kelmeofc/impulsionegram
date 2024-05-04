import { create } from 'zustand'

type PackageStore<Package> = {
    _package: Package,
    setPackage: (_package: any) => void
}

export const usePackageStore = create<PackageStore<any>>((set) => ({
    _package: {},
    setPackage: (_package: any) => set((state: any) => ({ _package: { ..._package } }))
}))