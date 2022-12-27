export const required = value => {
    if(value) return undefined;

    return "Необходимо ввести сообщение"
}

export const maxLengthCreator = (maxLength) =>  (value) => {
    if(value.length > maxLength) return `Максимальное значение ${maxLength} символов`;

    return undefined;
}