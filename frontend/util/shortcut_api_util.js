export const postShortcut = (shortcut) => {
  return $.ajax({
    method: 'post',
    url: 'api/shortcuts',
    data: {
      shortcut
    }
  });
};

export const deleteShortcut = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/shortcuts/${id}`,
  });
};
