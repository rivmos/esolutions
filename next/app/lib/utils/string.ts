export const shortenText = (text:string | undefined) => {
    return `${text?.split(' ')?.slice(0, 25)?.join(' ')}...`
}
