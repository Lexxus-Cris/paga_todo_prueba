import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useBankStore = create(
    persist(
        (set, get) => ({
            banks: [],
            setBanks: (banks) => set(() => ({ banks })),
            removeBank: (bankName) =>
                set(() => ({
                    banks: get().banks.filter((bank) => bank.bankName !== bankName),
                })),
            filterBank: (bankName) =>
                set(() => ({
                    banks: get().banks.filter((bank) => bank.bankName === bankName)
                })),
            sortBank: () =>
                set(() => ({
                    banks: get().banks.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1
                        }
                        if (a.name < b.name) {
                            return -1
                        }

                        return 0;
                    })
                }))
        }),
        {
            name : "banks",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useBankStore;