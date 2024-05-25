import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useBankStore = create(
    persist(
        (set, get) => ({
            banks: [],
            originalBanks: [],
            setBanks: (banks) => set(() => {
                if (get().originalBanks.length === 0) {
                    return { banks, originalBanks : banks}
                }
                return { banks };
            }),
            removeBank: (bankName) =>
                set(() => ({
                    banks: [...get().banks].filter((bank) => bank.bankName !== bankName),
                    originalBanks: [...get().banks].filter((bank) => bank.bankName !== bankName),
                })),
            filterBank: (searchTerm) =>
                set(() => ({
                    banks: [...get().originalBanks].filter((bank) =>
                        bank.bankName.toLowerCase().includes(searchTerm.toLowerCase())
                    ),
                })),
            sortBankAsc: () =>
                set(() => {
                    const banksAsc =[...get().banks].sort((a, b) => (a.bankName > b.bankName) ? 1 : (a.bankName < b.bankName) ? -1 : 0);
                    return {
                        banks: banksAsc
                    }
                }),
            sortBankDesc: () =>
                set(() => {
                    const banksDesc = [...get().banks].sort((a, b) => (a.bankName > b.bankName) ? -1 : (a.bankName < b.bankName) ? 1 : 0);
                    return {
                        banks: banksDesc
                    }
                }),
            resetOrder: () =>
                set(() => ({
                    banks: get().originalBanks,
                }))
        }),
        {
            name : "banks",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useBankStore;