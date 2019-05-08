const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
];

export function getdate(regDate) {
    const date = new Date(regDate);

    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
}