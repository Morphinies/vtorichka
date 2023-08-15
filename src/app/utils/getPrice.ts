export const getPrice = (number: string) => {
    return Number(number)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
