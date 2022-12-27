export const getTime = () => {
  const currentTime = new Date();
  const timeValue = new Date(currentTime.getTime() + 15 * 60000);
  return new Intl.DateTimeFormat('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(timeValue);
};