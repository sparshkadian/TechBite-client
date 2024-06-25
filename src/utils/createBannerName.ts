export const createBannerName = (file: File) => {
  const originalFileName = file.name;
  const timeStamp = Date.now();
  const fileExtension = originalFileName.split('.').pop();
  const fileNameWithoutExtension = originalFileName.replace(
    `.${fileExtension}`,
    ''
  );
  const uniqueFileName = `${fileNameWithoutExtension}_${timeStamp}.${fileExtension}`;
  return uniqueFileName;
};
