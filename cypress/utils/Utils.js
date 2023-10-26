class Utils {
    getRandomString(stringLength) {
        const allowedChars = 'abcdefghijklmnopqrstuvwxyz'
        let result = 'A'
        for (let i = 0; i < stringLength; i++) {
            result += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
        }
        return result
    }
}

export const utils = new Utils()