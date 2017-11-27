export const postTagging = (tagging) => {
  return $.ajax({
    method: 'post',
    url: 'api/taggings',
    data: {
      tagging
    }
  });
};

export const deleteTagging = (tagging) => {
  return $.ajax({
    method: 'patch',
    url: `api/taggings/`,
    data: {
      tagging
    }
  });
};
