export function grabImageURLFromGhostPost(html, caption) {
  let content = String(html);
  var pattern = "<figure((?!</figure>).)*?(" + caption + ").*?</figure>";
  var regex = new RegExp(pattern, "g");
  const targetImage = content.match(regex);
  if (targetImage) {
    return /src="([^"]*)/.exec(targetImage)[1];
  } else {
    return null;
  }
}

export function grabAllImageURLFromGhostPost(html, caption) {
  let content = String(html);
  var pattern = "<figure((?!</figure>).)*?(" + caption + ").*?</figure>";
  var regex = new RegExp(pattern, "g");
  let allImages = [];
  let targetImage;
  do {
    targetImage = content.match(regex);
    if (targetImage) {
      targetImage = /src="([^"]*)/.exec(targetImage)[1];
      allImages.push(targetImage);
    }
  } while (targetImage);
  if (targetImage) {
    return allImages;
  } else {
    return null;
  }
}

export function removeImageFromGhostPost(html, caption) {
  let content = String(html);
  var pattern = "<figure((?!</figure>).)*?(" + caption + ").*?</figure>";
  var regex = new RegExp(pattern, "g");
  return content.replace(regex, "");
}

export function redirectTo500() {
  return {
    redirect: {
      destination: "/500",
      permanent: false,
    },
  };
}
export default {};
