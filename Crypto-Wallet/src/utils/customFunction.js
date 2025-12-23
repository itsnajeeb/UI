export const formattedWalletId = (walletId) => {
    const start = walletId.slice(0, 5);
    const end = walletId.slice(-3)
    return `${start}...${end}`
}