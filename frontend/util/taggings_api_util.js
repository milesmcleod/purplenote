export const postTagging = (tagging) => {
  return $.ajax({
    method: 'post',
    url: 'api/taggings',
    data: {
      tagging
    }
  });
};

export const deleteTagging = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/taggings/${id}`
  });
};
