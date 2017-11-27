export const fetchTags = () => {
  return $.ajax({
    method: 'get',
    url: 'api/tags'
  });
};

export const postTag = (tag) => {
  return $.ajax({
    method: 'post',
    url: 'api/tags',
    data: {
      tag
    }
  });
};

export const patchTag = (tag) => {
  return $.ajax({
    method: 'patch',
    url: `api/tags/${tag.id}`,
    data: {
      tag
    }
  });
};

export const deleteTag = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/tags/${id}`
  });
};
