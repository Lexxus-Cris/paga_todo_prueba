import useBankStore from "@/store/useBankStore";

export const useGetBanks = () => {

    const setBanks = useBankStore((state) => state.setBanks);

    const fetchAndStoreBanks = async () => {
        try {
            const response = await fetch('/api/banks');

            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            const data = await response.json();
            setBanks(data)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    return { fetchAndStoreBanks };

}