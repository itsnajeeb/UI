export const formattedWalletId = (walletId) => {
    const start = walletId.slice(0, 5);
    const end = walletId.slice(-3)
    return `${start}...${end}`
}

export const formattedElement = (startingIndex, lastIndex, element) => {
    const start = element.slice(0, startingIndex)
    const end = element.slice(lastIndex)
    return `${start}****${end}`
}