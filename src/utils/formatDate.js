export const formatDate = feed => {
  const feedDate = new Date(feed.createdAt).toLocaleDateString().split('');
  feedDate.pop();
  const formattedFeedDate = feedDate.join('').replaceAll('.', '-');
  return formattedFeedDate;
};
