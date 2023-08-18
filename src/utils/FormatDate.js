export const FormatDate = feed => {
  const feedDate = new Date(feed.createdAt).toLocaleDateString().split('');
  feedDate.pop();
  const formattedFeedDate = feedDate
    .filter(el => el !== '')
    .join('')
    .replaceAll('.', '-');
  return formattedFeedDate;
};
