export const Config = [
    {
        name: 'name',
        placeholder: 'ФИО',
        required: true
    },
    {
        name: 'email',
        placeholder: 'Почта',
        required: true,
        pattern: '^\\S+@\\S+\\.\\S+$',
        errorMessage: 'Неправильный формат'
    },
    {
        name: 'password',
        placeholder: 'Пароль',
        required: true,
        validate: (state) => !(state.password === state.duplicate),
        minLenght: 6,
        type: 'password',
        errorMessage: 'Пароли не совападают'
    },
    {
        name: 'duplicate',
        placeholder: 'Подтвердите пароль',
        required: true,
        type: 'password'
    }
    ,
    {
        name: 'phone',
        placeholder: 'Телефон',
        required: true,
        lenght: 11,
        errorMessage: 'Неправильный формат'
    }
]