export default function getDateAndDay(offset) {
    const now = new Date();
    const targetDate = new Date(now);
    targetDate.setDate(now.getDate() + offset);

    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[targetDate.getDay()];

    return {
        formattedDate: formattedDate,
        dayOfWeek: dayOfWeek
    };
}