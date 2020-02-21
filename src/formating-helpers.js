//  "american_samoa" ---> "American Samoa"
export function formatKey(key) {
  return key
    .split("_")
    .map(word => {
      return word[0].toUpperCase() + word.substring(1, word.length);
    })
    .join(" ");
}
