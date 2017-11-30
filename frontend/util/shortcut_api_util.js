export const postShortcut = (shortcut) => {
  return $.ajax({
    method: 'post',
    url: 'api/shortcuts',
    data: {
      shortcut
    }
  });
};

export const patchShortcut = (shortcut) => {
  return $.ajax({
    method: 'patch',
    url: `api/shortcuts`,
    data: {
      shortcut
    }
  });
};
